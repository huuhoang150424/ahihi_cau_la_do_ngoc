const body=document.body
const switchElement=document.querySelector('#switch-mode i')
//sự kiện click
//lưu lại darkmode khi reload lại trang
let mode=localStorage.getItem('darkmode')
// console.log(mode)
if (mode=='true') {
    body.classList.add('dark')
    switchElement.className="fa-solid fa-sun"
}
switchElement.addEventListener('click',function(e) {
    //dùng toggle('tên class')
    //có class thì xóa không có thì thêm
    //thay đổi icon
    switchElement.classList.toggle('fa-sun')
    switchElement.classList.toggle('fa-moon')
    //lưu lại chế độ tối khi reload lại trang
    let mode=body.classList.toggle('dark')
    //console.log(mode)
    // lưu trữ vào trong lưu trữ cục bộ (localStorage)
    localStorage.setItem('darkmode',mode)
})