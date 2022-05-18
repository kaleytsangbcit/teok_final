export const header = "Answer these questions!";

export const qs = [
    {
        title:"  Which activities are you in the mood for?",
        ops:[{
            img:"/outdoor.png",
            text:"outdoor"
        }, 
        {
            img:"/indoor.png",
            text:"indoor"
        }]

    },
    {
        title:"How do you currently feel?",
        ops:[{
            img:"/cold.png",
            text:"cold"
        },
        {
            img:"warm.png",
            text:"warm"
        }]
    },
    {
        title:"What colour do you currently feel like?",
        warm:[{
            img:"/teok_icon2.png",
            text:"red"
        },
        {
            img:"/teok_icon2.png",
            text:"yellow"
        }],
        cold:[
            {
                img:"/teok_icon2.png",
                text:"green"
            },
            {
                img:"/teok_icon2.png",
                text:"blue"
            }
        ]
    }
]

export const res = {
    outdoor:{
        red:[
            {
                name:"Fire",
                src:"/audio/Nature/redFire.mp3"
            },
            {
                name:"Fireplace",
                src:"/audio/Nature/redFireplace.mp3"
            },
        ],
        yellow:[
            {
                name:"Bird 1",
                src:"/audio/Nature/yellowBird.mp3"
            },
            {
                name:"Bird 2",
                src:"/audio/Nature/yellowBird2.mp3"
            },
        ],
        green:[
            {
                name:"Forest",
                src:"/audio/Nature/greenForest.mp3"
            },
            {
                name:"Wind",
                src:"/audio/Nature/greenWind.mp3"
            },
        ],
        blue:[
            {
                name:"Rain",
                src:"/audio/Nature/blueRain.mp3"
            },
            {
                name:"Ocean",
                src:"/audio/Nature/blueWater.mp3"
            },
        ]
    },
    indoor:{
        red:[
            {
                name:"Campfire",
                src:"/audio/Nature/redCampfire.mp3"
            },
            {
                name:"Nap Time",
                src:"/audio/Nature/redNaptime.mp3"
            },
        ],
        yellow:[
            {
                name:"Autumn",
                src:"/audio/Nature/yellowAutumn.mp3"
            },
            {
                name:"Resolve",
                src:"/audio/Nature/yellowResolve.mp3"
            },
        ],
        green:[
            {
                name:"Everything",
                src:"/audio/Nature/greenEverything.mp3"
            },
            {
                name:"Farewell",
                src:"/audio/Nature/greenFarewell.mp3"
            },
        ],
        blue:[
            {
                name:"Sailing",
                src:"/audio/Nature/blueSailing.mp3"
            },
            {
                name:"Snow",
                src:"/audio/Nature/blueSnow.mp3"
            },
        ]
    }
}

//Storing the answers
var answers = {
    place:null,
    heat:null,
    col:null
}

export function ChangeAnswers(n, qnum){
    //if we are on 0th index, we store the answer on 
    //aswers[0]...wame with answers[1]
    if(qnum === 0){
        answers.place = n;
    }if(qnum === 1){
        answers.heat = n;
    }if(qnum === 2){
        answers.col = n;
    }
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