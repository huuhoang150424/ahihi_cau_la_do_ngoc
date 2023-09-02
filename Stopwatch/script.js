//
const ctnElement=document.querySelector('.container')
//tạo từng phần tử
let second=0
let tens=0
const secondElement=document.querySelector('#second')
const tensElement=document.querySelector('#tens')
const startElement=document.querySelector('#start')
const stopElement=document.querySelector('#stop')
const resetElement=document.querySelector('#reset')
let Interval
//sự kiện khi click vào start
startElement.addEventListener('click',function() {
    // clearInterval(Interval) 
    //sẽ dừng bất kỳ bộ đếm thời gian nào 
    //đã được bắt đầu trước đó 
    //(để tránh trường hợp có nhiều bộ đếm thời gian chạy song song).
    clearInterval(Interval)
    Interval=setInterval(startTime,10)
})
stopElement.addEventListener('click',function() {
    clearInterval(Interval)
})
resetElement.addEventListener('click',function() {
    clearInterval(Interval)
    tens="00"
    second="00"
    secondElement.innerHTML=second
    tensElement.innerHTML=tens
})
function startTime() {
    tens++
    if (tens<=9) {
        tensElement.innerHTML=`0${tens}`
    }
    if (tens>9) {
        tensElement.innerHTML=`${tens}`
    }
    if (tens>=99) {
        tens=0
        tensElement.innerHTML=`0${tens}`
        second+=1
        secondElement.innerHTML=`0${second}`
    }
    if (second>9) {
        secondElement.innerHTML=`${second}`
    }
    if (second<=9) {
        secondElement.innerHTML=`0${second}`
    }
}
// const ctnElement = document.querySelector('.container');
// const secondElement = document.querySelector('#second');
// const tensElement = document.querySelector('#tens');
// const startElement = document.querySelector('#start');
// const stopElement = document.querySelector('#stop');
// const resetElement = document.querySelector('#reset');

// let tens = 0;
// let second = 0;
// let Interval;
// if (ctnElement) {
//     console.log(secondElement, tensElement, startElement, stopElement, resetElement);
// }
// startElement.addEventListener('click', function() {
//     clearInterval(Interval);
//     Interval = setInterval(startTime, 10);
// });
// stopElement.addEventListener('click', function() {
//     clearInterval(Interval);
// });
// resetElement.addEventListener('click', function() {
//     clearInterval(Interval);
//     tens = 0;
//     second = 0;
//     updateDisplay();
// });
// function updateDisplay() {
//     tensElement.innerHTML = tens < 10 ? `0${tens}` : tens;
//     secondElement.innerHTML = second < 10 ? `0${second}` : second;
// }
// function startTime() {
//     tens++;
//     if (tens >= 100) {
//         tens = 0;
//         second++;
//         if (second >= 60) {
//             second = 0; // Reset to zero after reaching 60 seconds
//         }
//     }
//     updateDisplay();
// }






