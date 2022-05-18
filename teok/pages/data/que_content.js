

export const header = "Answer these questions!";

export const qs = [
    {
        title:"Which activities are you in the mood for?",
        ops:["/outdoor2.png", "/indoor2.png"]
    },
    {
        title:"How do you currently?",
        ops:["/cold2.png", "warm2.png"]
    },
    {
        title:"What colour do you currently feel like?",
        ops:["/teok_icon2.png", "/teok_icon2.png", "/teok_icon2.png", "/teok_icon2.png"]
    }
]

export const res = {
    Good: {
        text:[
            "That is wonderful to hear",
            "I love your attitude"
        ],
        img:"https://placekitten.com/200/200"
    }
}

//Storing the answers
var answers = [];

export function ChangeAnswers(n, qnum){
    //if we are on 0th index, we store the answer on 
    //aswers[0]...wame with answers[1]
    answers[qnum] = n;
    console.log(answers);
}

export function GetAnswers(){
    return answers;
}

//Storing the name
var name = "";

export function ChangeName(n){
    name = n;
    console.log(name);
}

// export function GetName(){
//     return name;
// }