import { QuizResult } from "../models";
import { Topic } from "../models";


export type ResourceItem = {
    id:string;
    title:string;
    url:string;
    completed?:boolean;
}
export type TopicWithResult = Topic & {
    quizResult ?: QuizResult;
    isQuizPassed?:boolean;
};
