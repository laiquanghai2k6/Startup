import { Auth, DataStore } from "aws-amplify";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { stringToTokens } from "react-native-markdown-display";
import { UserTopicProgress } from "../models";
import { QuizResult, Topic } from "../models";
import { TopicWithResult } from "../type/models";
import { groupByLevel, getCurrentActiveLevel } from "../utils/topics";


interface ModuleContextData {
    levels: TopicWithResult[][];
    currentLevel: number;
    updateTopicProgress:(topicID: string, newProgress: UserTopicProgress) => void;
}

const ModuleContext = createContext<ModuleContextData>({
    levels: [],
    currentLevel:0,
    updateTopicProgress: ()=>{}

});

const ModuleContextProvider = ({ children }: { children: ReactNode }) => {
    const [topicss, setTopicss] = useState<TopicWithResult[]>([])
    const [levels, setLevels] = useState<TopicWithResult[][]>([]);
    const [currentLevel, setCurrentLevel] = useState<number>(0)


    useEffect(() => {
        const fetchTopics = async () => {
            const quizTopics = await DataStore.query(Topic)
            const idsTopic = quizTopics.map(topic => topic.id);

            const topics = await Promise.all(idsTopic.map(async (idTopic) => {
                let topic = await DataStore.query(Topic, idTopic);
                return topic
            }))
            // console.log("New: ", quizTopics)
            const topicsWithProgress = await addProgressToTopics(topics);
            setTopicss(topicsWithProgress)



        }
        fetchTopics();
    }, [])


    useEffect(() => {

        const _levels = groupByLevel(topicss)
        setCurrentLevel(getCurrentActiveLevel(_levels));
        setLevels(_levels)

    }, [topicss])

    const addProgressToTopics = async (
        topics: Topic[]
    ): Promise<TopicWithResult[]> => {
        const topicsWithProgress = await Promise.all(
            topics.map(addProgressToTopic)

        )
        return topicsWithProgress
    }

    const addProgressToTopic = async (topic: Topic) => {
        const topicWithProgress: TopicWithResult = { ...topic }
       
        const userData = await Auth.currentAuthenticatedUser();

        //Topic Progress
        const userTopicProgresses = await DataStore.query(UserTopicProgress);

        const userProgress = userTopicProgresses.find(
            (tp) => tp.topicId === topic.id && tp.sub === userData.attributes.sub
        );
        if (userProgress) {
            topicWithProgress.progress = userProgress
        }

        // Quiz results
        if (topic.Quiz) {
            const userResults = (await DataStore.query(QuizResult)).filter(
                (result) =>
                    result.quizId === topic.Quiz?.id &&
                    result.sub === userData?.attributes.sub
            );
            if (userResults.length !== 0) {
                const bestResult = userResults.reduce((best, result) =>
                    result.percentage > best.percentage ? result : best
                )
              topicWithProgress.quizResult = bestResult;
              topicWithProgress.isQuizPassed = bestResult && bestResult.percentage >= 0.9
             }
            
             

        }
        return topicWithProgress
    }
    const updateTopicProgress = (topicID: string, newProgress: UserTopicProgress) => {
        setTopicss((_topics)=>
            _topics.map((topic)=>
                topic.id !== topicID ? topic:{...topic,progress:newProgress}
            )
        )
    }



    return <ModuleContext.Provider value={{
        levels,
        currentLevel,
        updateTopicProgress
    }}>
        {children}
    </ModuleContext.Provider>
};
export default ModuleContextProvider;
export const useModuleContext = () => useContext(ModuleContext)