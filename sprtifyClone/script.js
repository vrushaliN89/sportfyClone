console.log("welcome to sportify")
// Initialize variables
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay')
let myProgressBar=document.getElementById('myProgressBar')
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName')
let songItems=Array.from(document.getElementsByClassName('songItem'))
let songs=[{
    songName:"Let me love you",filePath:"1.mp3" ,coverPath:"1.jpg"
},{
    songName:"salam namaste",filePath:"2.mp3" ,coverPath:"2.jpg"
},{
    songName:"Tu jane na",filePath:"3.mp3" ,coverPath:"3.jpg"
},{
    songName:"Tu meri jaan",filePath:"4.mp3" ,coverPath:"4.jpg"
},{
    songName:"Ganpati bappa morya",filePath:"5.mp3" ,coverPath:"5.jpg"
},{
    songName:"Bam Bam bhole",filePath:"6.mp3" ,coverPath:"6.jpg"
},{
    songName:"Tu he meri shab hai",filePath:"7.mp3" ,coverPath:"7.jpg"
},
{
    songName:"Princess song",filePath:"8.mp3" ,coverPath:"8.jpg"
},
{
    songName:"Sudnyey's song",filePath:"9.mp3" ,coverPath:"9.jpg"
},
{
    songName:"Ye hansi vadiya",filePath:"10.mp3" ,coverPath:"10.jpg"
},]

songItems.forEach((element,i) => {
    console.log(element,i)
    element.getElementsByTagName("img")[0].src=songs[i].coverPath
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName
    
});
//audio element play
masterPlay.addEventListener('click',()=>{
     if(audioElement.paused || audioElement.currentTime<=0){
         audioElement.play();
         masterPlay.classList.remove('fa-play-circle')
         masterPlay.classList.add('fa-pause-circle')
         gif.style.opacity=1
         }
   else{
    audioElement.pause();
    masterPlay.classList.add('fa-play-circle')
    masterPlay.classList.remove('fa-pause-circle')
    gif.style.opacity=0


   }
})
//listen to event
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    //update Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log("progers",progress)
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach(element => {
        element.classList.add("fa-play-circle")
        element.classList.remove('fa-pause-circle')

    });
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach(element => {
    element.addEventListener('click',(e)=>{
        makeAllPlays()
        songIndex=parseInt(e.target.id)
         e.target.classList.remove('fa-play-circle')
         e.target.classList.add('fa-pause-circle')
         audioElement.src=`${songIndex+1}.mp3`
         audioElement.currentTime=0;
         audioElement.play();
         masterSongName.innerText=songs[songIndex].songName;
         masterPlay.classList.remove('fa-play-circle')
         masterPlay.classList.add('fa-pause-circle')
         gif.style.opacity=1

    })
});
document.getElementById("next").addEventListener('click',(e)=>{
    if(songIndex>=9){
        songIndex=0
    }else{
    songIndex+=1
    }
    audioElement.src=`${songIndex+1}.mp3`
    audioElement.currentTime=0;
    audioElement.play();
    masterSongName.innerText=songs[songIndex].songName;
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
    gif.style.opacity=1
})
document.getElementById("previous").addEventListener('click',(e)=>{
    if(songIndex<=0){
        songIndex=0
    }else{
    songIndex-=1
    }
    audioElement.src=`${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
    gif.style.opacity=1
})