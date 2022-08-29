import { QuizResult, UserTopicProgress } from "../models";
import { Topic } from "../models";


export type ResourceItem = {
    id:string;
    title:string;
    url:string;
    completed?:boolean;
}
export type TopicWithResult = Topic & {
    progress?:UserTopicProgress;
    quizResult ?: QuizResult;
    isQuizPassed?:boolean;
};
