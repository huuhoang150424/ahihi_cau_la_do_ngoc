const tblElement=document.querySelector('.tbl')
// if (tblElement) {
//     console.log(tblElement)
// }
//hàm nhập vào
function Num(val) {
    let resultElement=document.querySelector('#result')
    resultElement.value+=val
}

//hàm kết quả
function Equal() {
    let resultElement=document.querySelector('#result')
    result=resultElement.value
    output=eval(result)
    if (output) {
        console.log(output)
    }
    resultElement.value=output
}
//hàm xóa tất cả
function crl() {
    let resultElement=document.querySelector('#result')
    resultElement.value=''
}