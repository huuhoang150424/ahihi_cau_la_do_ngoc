//lấy thời gian mình truyền vào
const date=new Date("September 08 2089 13:20:40").getTime()
let time=setInterval(()=>{
    //lấy thời gian hiện tại
    let now=new Date().getTime()
    let distance=date-now
    //console.log(distance)
    let d= Math.floor(distance/(1000*60*60*24))
    //console.log(d)
    let hur=Math.floor((distance%(1000*60*60*24))/(1000*60*60))
    let min=Math.floor((distance%(1000*60*60))/(1000*60))
    let sec=Math.floor((distance%(1000*60*60))/1000)
    document.getElementById('times').innerHTML=` ${d} Ngày : ${hur} Giờ : ${min} Phút : ${sec} Giây `
    if (distance<0) {
        clearInterval(x)
        document.getElementById('times').innerHTML="Time's up"
    }
},10)