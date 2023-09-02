function displayTime() {
    //khởi tạo đối tượng date
    let date=new Date()
    let hour=date.getHours()
    let minutes=date.getMinutes()
    let second=date.getSeconds()
    var session=document.querySelector('#session')
    if (hour>=12) {
        session.innerHTML='PM'
    }
    else {
        session.innerHTML='AM'
    }
    document.querySelector('#hour').innerHTML=hour
    document.querySelector('#mintunes').innerHTML=minutes
    document.querySelector('#seconds').innerHTML=second
}
let time=displayTime
setInterval(time,10)