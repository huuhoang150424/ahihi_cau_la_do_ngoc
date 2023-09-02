// khai báo biến
const songElement=document.querySelector('#song')
const playBtn=document.querySelector('.play')
const nextElement=document.querySelector('.next')
const forwardElement=document.querySelector('.forward')
const durationELement=document.querySelector('.duration')
const remainingELement=document.querySelector('.remaining')
const rangBar=document.querySelector('.range')
const musicName=document.querySelector('.music-name')
const musicThumb=document.querySelector('.music-thumb')
const musicImage=document.querySelector('.music-thumb img')
let indexSong=0
//list nhạc
// const music=[
//     'music/Justin Bieber - Love Yourself (PURPOSE - The Movement).mp3',
//     'music/Justin Bieber - Intentions (Official Video (Short Version)) ft. Quavo.mp3',
//     'music/Justin Bieber - Hold On (Lyric Video).mp3',
//     'music/Justin Bieber - Peaches ft. Daniel Caesar, Giveon.mp3',
//     'music/Justin Bieber - Yummy (Official Video).mp3'
// ]
const music=[
    {
        id: 1,
        name: 'Justin Bieber - Love Yourself (PURPOSE - The Movement)',
        image: 'img/hi1.png',
        file: 'music/Justin Bieber - Love Yourself (PURPOSE - The Movement).mp3'
    },
    {
        id: 2,
        name: 'Justin Bieber - Intentions (Official Video (Short Version)) ft. Quavo',
        image: 'img/hi2.jpg',
        file: 'music/Justin Bieber - Intentions (Official Video (Short Version)) ft. Quavo.mp3'
    },
    {
        id: 3,
        name: 'Justin Bieber - Hold On (Lyric Video)',
        image: 'img/hi3.jpg',
        file: 'music/Justin Bieber - Hold On (Lyric Video).mp3'
    },
    {
        id: 4,
        name: 'Justin Bieber - Peaches ft. Daniel Caesar',
        image: 'img/hi4.jpg',
        file: 'music/Justin Bieber - Peaches ft. Daniel Caesar, Giveon.mp3'
    },
    {
        id: 5,
        name: 'Justin Bieber - Yummy (Official Video)',
        image: 'img/hi5.jpg',
        file: 'music/Justin Bieber - Yummy (Official Video).mp3'
    },
]
let timer
//chức năng chuyển bài
function handleEndedSong() {
    changeSong(1)
}
songElement.addEventListener('ended',handleEndedSong)
//chức năng bật tắt
let isPlaying=true
let animationFrameId=null
let currentAngle = 0;
//phương thức chuyển động
function rotateImage() {
    currentAngle += 0.09; // Điều chỉnh tốc độ xoay ở đây, số lớn hơn sẽ nhanh hơn
    if (currentAngle >= 360) {
        currentAngle = 0;
    }
    musicThumb.style.transform = `rotate(${currentAngle}deg)`;
    animationFrameId = requestAnimationFrame(rotateImage);
}
function playPause() {
    if (isPlaying) {
        if (!animationFrameId) {
            animationFrameId = requestAnimationFrame(rotateImage);
        }
        songElement.play();
        playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        isPlaying = false;
        timer = setInterval(displayTimer, 500);
    } else {
        if (animationFrameId) {
            //hủy chuyển động
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }
        songElement.pause();
        playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
        isPlaying = true;
        clearInterval(timer);
    }
}
playBtn.addEventListener('click',playPause)
//chức năng chuyển bài hát
function changeSong(dir) {
    let size =music.length
    if (dir===1) {
        //next song
        if (indexSong<size-1) {
            indexSong++
        } else {
            indexSong=0
        }
        isPlaying=true
    } else if (dir ===-1) {
        indexSong--
        if (indexSong<0) {
            indexSong=size-1
        }
        isPlaying=true
    }
    init(indexSong)
    // songElement.setAttribute("src",`${music[indexSong].file}`)
    playPause(true)

}

nextElement.addEventListener('click',function() {
    changeSong(1)
})
forwardElement.addEventListener('click',function() {
    changeSong(-1)
})
//thời gian bài hát chạy
function displayTimer() {
    //lấy ra thuộc tính của audio
    const {duration,currentTime}=songElement
    //thiết lập giá trị range.max bằng thời gian bài hát
    rangBar.max=duration
    rangBar.value = currentTime
    remainingELement.textContent=formatTime(`${currentTime}`)
    if (!duration) {
        durationELement.textContent="00:00"
    } else {
        durationELement.textContent=formatTime(duration)
    }
}
//hiện thị thời gian của bài hát ngay khi bào hát được tải lên
songElement.addEventListener('loadedmetadata', function() {
    displayTimer();
});

// chuẩn hóa thời gian
function formatTime(number) {
    const minutes=Math.floor(number/60)
    const second=Math.floor(number - minutes*60)
    return `${minutes<10?'0'+minutes:minutes}:${second<10?'0'+second:second}`
}
//kéo thanh input để thay đổi thời gian nhạc
function handleChangeBar() {
    songElement.currentTime=rangBar.value
}
rangBar.addEventListener('change',handleChangeBar)
function init(indexSong) {
    songElement.setAttribute("src",`${music[indexSong].file}`);
    musicImage.setAttribute('src',music[indexSong].image);
    musicName.textContent = music[indexSong].name;
    displayTimer();
}
init(indexSong)
















