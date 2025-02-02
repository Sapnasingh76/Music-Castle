console.log("WELCOME TO MUSIC-Castle")
//Intialise the Variable
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3.mp3");
let masterplay = document.getElementById('masterplay');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));


let songs =[
    {songName:"Die with a smile - Bruno mars & Lady Gaga",filepath :"songs/1.mp3.mp3",coverpath : "die.jpg"},
    {songName:"Set fire to the rain - Rihanna",filepath :"songs/2.mp3.mp3",coverpath : "set.jpg"},
    {songName:"Thousand year - Cristina Perri",filepath :"songs/3.mp3.mp3",coverpath : "thousand.jpg"},
    {songName:"Unstoppable - Sia",filepath :"songs/4.mp3.mp3",coverpath : "unstoppable.jpg"},
    {songName:"Somewhere only we know - Gustixa",filepath :"songs/5.mp3.mp3",coverpath : "somewhere.jpg"},
    {songName:"Dusk till down - ZAYN",filepath :"songs/6.mp3.mp3",coverpath : "dusk.jpg"},
]

songItem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src =songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

});

//handle play/pause click    

masterplay.addEventListener('click',()=>
{
   if(audioElement.paused || audioElement.currentTime<=0)
    {
       audioElement.play();
         masterplay.classList.remove('fa-play-circle');
         masterplay.classList.add('fa-pause-circle');
         gif.style.opacity = 1;
    }
        
    
   else{
        audioElement.pause();
          masterplay.classList.remove('fa-pause-circle');
         masterplay.classList.add('fa-play-circle');
         gif.style.opacity = 0;

   }
    
        })
    //Listening to Events
audioElement.addEventListener('timeupdate',() =>{
   
    //update seekbar

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value = progress;
})


 progressbar.addEventListener('change',()=>{
    audioElement.currentTime = progressbar.value * audioElement.duration/100;
    //p = progressbar.value, D = audioelement.duration, CT = audioElement.currentTime(P = CT/D*100) then (CT = P*D/100)
                  })


const makeAllPlays =()=>{
   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{

        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');

         })
  }


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
   element.addEventListener('click',(e)=>{
        //if(e.target.classList.contains('fa-circle-play'))
        //{
         makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        


    })

})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >=4){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
        audioElement.src = `songs/${songIndex + 1}.mp3.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
       
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 1;
    }
    else{
        songIndex -= 1;
    }
        audioElement.src = `songs/${songIndex + 1}.mp3.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
       
})