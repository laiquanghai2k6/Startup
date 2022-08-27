
import { Topic } from "../models";
import { TopicWithResult } from "../type/models";
 
 export const groupByLevel = (topics: Topic[]) =>{
    const levels: {[key: number]: Topic[]} = {};

    topics.forEach((topic )=>{
        if(!levels[topic.level]){
          levels[topic.level] = [];
        }
        levels[topic.level].push(topic)
      });     
      return Object.values(levels);
};

export const getCurrentActiveLevel = (levels: TopicWithResult[][]) =>{
  return levels.reduce((acc,levelTopics) => 
    levelTopics.every((topic) => topic.isQuizPassed) ? acc + 1 : acc
   //if all topics are completed , increase the curren level
    
  ,1);
}