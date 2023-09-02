//
const body=document.body
const switchElement=document.querySelector('.btn i')
//lưu chế độ tối khi reload lại trang web
//lấy chế độ dark từ localStrorage đã lưu
let mode =localStorage.getItem('darkMode')
//console.log(mode)
if (mode=='true') {
    body.classList.add('dark')
    switchElement.className='fa-solid fa-sun'
}
//sự kiện click
switchElement.addEventListener('click',(e)=>{
    switchElement.classList.toggle('fa-sun')
    switchElement.classList.toggle('fa-moon')
    //save mode
    let data= body.classList.toggle('dark')
    //console.log(data)
    localStorage.setItem('darkMode',data)
})




