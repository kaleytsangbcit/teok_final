export const header = "Answer these questions!";

export const qs = [
    {
        title:"  Which activities are you in the mood for?",
        ops:[{
            img:"/outdoor2.png",
            text:"outdoor"
        }, 
        {
            img:"/indoor2.png",
            text:"indoor"
        }]

    },
    {
        title:"How do you currently feel?",
        ops:[{
            img:"/cold2.png",
            text:"cold"
        },
        {
            img:"warm2.png",
            text:"warm"
        }]
    },
    {
        title:"What colour do you currently feel like?",
        warm:[{
            img:"/teokGreen.svg",
            text:"green"
        },
        {
            img:"/teokBlue.svg",
            text:"blue"
        }],
        cold:[
            {
                img:"/teokRed.SVG",
                text:"red"
            },
            {
                img:"/teokYellow.svg",
                text:"yellow"
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
                src:"/audio/Colorsongs/redCampfire.mp3"
            },
            {
                name:"Nap Time",
                src:"/audio/Colorsongs/redNaptime.mp3"
            },
        ],
        yellow:[
            {
                name:"Autumn",
                src:"/audio/Colorsongs/yellowAutumn.mp3"
            },
            {
                name:"Resolve",
                src:"/audio/Colorsongs/yellowResolve.mp3"
            },
        ],
        green:[
            {
                name:"Everything",
                src:"/audio/Colorsongs/greenEverything.mp3"
            },
            {
                name:"Farewell",
                src:"/audio/Colorsongs/greenFarewell.mp3"
            },
        ],
        blue:[
            {
                name:"Sailing",
                src:"/audio/Colorsongs/blueSailing.mp3"
            },
            {
                name:"Snow",
                src:"/audio/Colorsongs/blueSnow.mp3"
            },
        ]
    }
}

//Storing the answers
var answers = {
    place:null,
    temp:null,
    col:null
}

export function ChangeAnswers(n, qnum){
    //if we are on 0th index, we store the answer on 
    //aswers[0]...wame with answers[1]
    if(qnum === 0){
        answers.place = n;
    }if(qnum === 1){
        answers.temp = n;
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