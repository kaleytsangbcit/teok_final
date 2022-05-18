import { GetAnswers,res } from "../data/que_content"
// import { red, yellow, green, blue } from "../data/sound_content";



export default function QResults() {

    // function play(src) {
    //     var audio = document.getElementById('ai');
    //     console.log(audio);
    //     // audio.src = aud[sel]
    //     audio.src = src
    //     audio.play();
    // }
    const an = GetAnswers();
    console.log(an, res[an.place][an.col]);
    // const musics = res[an.place][an.col]
    return <div>
        {
    //     musics.map((o,i)=> <NatureButton
    //     bg={(sel === i) ? "#FCBAC2" : "#ADCBDE"}
    //     onClick={
    //       ()=>{setSel(i); play(o.src)}
    //     }

    // >
    //     <text className={styles.MusicTitle}>{o.name}</text>
    //     <img className={styles.sound} src="/sound_icon.png" alt="sound" />
    // </NatureButton>
    // )
}
    </div>

}