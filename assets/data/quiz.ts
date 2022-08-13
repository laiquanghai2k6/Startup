export default [{
    id:'1',
    question:'what is the output of the following code',
    image:
    "https://lqh-bucket2.s3.us-west-1.amazonaws.com/images/carbon.png",
    type:'MULTIPLE_CHOICE',
    
    choices:["0","10","error",],
    correctAnswers:["error"]
},{
    id:'2',
    question:'what is the weather like',
    content:`
    **This is some bold text!**   
This is normal text. Declare \`const a = 123\`
\`\`\`
const a = 123

console.log(a)
\`\`\`
`,
type:'MULTIPLE_ANSWERS',
 choices:["Good","Bad","Bruh"],
correctAnswers:["Bruh"]
},{
    id:'3',
    question:'What is the output',
    image:"https://lqh-bucket2.s3.us-west-1.amazonaws.com/images/carbon1.png",
type:'MULTIPLE_ANSWERS',
 choices:["5","4","10"],
correctAnswers:["4"]
}

]