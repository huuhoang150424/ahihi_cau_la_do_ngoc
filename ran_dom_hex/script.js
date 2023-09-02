// Các biến cần thiết
const body = document.body;
const btn = document.querySelector('#ahi');
const hexValue = document.querySelector('#text');
const CopyElement = document.querySelector('#copy');
const hex = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
// Thiết lập màu nền ban đầu
const initialColor = '#000000';
body.style.background = initialColor;
hexValue.textContent = initialColor;
// Hàm tạo mã màu ngẫu nhiên
function getRandomHexColor() {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * hex.length);
        color += hex[randomIndex];
    }
    return color;
}
// Sự kiện khi nhấn nút random
btn.addEventListener('click', function() {
    const color = getRandomHexColor();
    body.style.background = color;
    hexValue.textContent = color;
});
// Sự kiện khi nhấn nút sao chép
CopyElement.addEventListener('click', function() {
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = hexValue.textContent;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    alert('Mã màu đã được sao chép!');
});


// CopyElement.addEventListener('click', function() {
//     // Tạo một phần tử textarea tạm thời để chứa mã màu
//     const tempTextArea = document.createElement('textarea');
//     tempTextArea.value = hexValue.innerHTML; // Giả sử hexValue là phần tử chứa mã màu bạn muốn sao chép
//     document.body.appendChild(tempTextArea);
//     tempTextArea.select();

//     // Sao chép mã màu vào clipboard
//     document.execCommand('copy');

//     // Loại bỏ phần tử textarea tạm thời
//     document.body.removeChild(tempTextArea);

//     // Bạn có thể thêm thông báo cho người dùng biết rằng mã màu đã được sao chép
//     alert('Mã màu đã được sao chép!');
// });
// function copyToClipboard(text) {
//     // Tạo một phần tử textarea tạm thời
//     const tempTextArea = document.createElement('textarea');
//     tempTextArea.value = text; // Thiết lập giá trị cần sao chép
//     document.body.appendChild(tempTextArea);
//     tempTextArea.select();

//     // Sao chép nội dung của phần tử textarea vào clipboard
//     document.execCommand('copy');

//     // Loại bỏ phần tử textarea tạm thời
//     document.body.removeChild(tempTextArea);
// }

// // Sử dụng hàm:
// const copyButton = document.querySelector('#copyButton');
// copyButton.addEventListener('click', function() {
//     const textToCopy = 'Nội dung cần sao chép'; // Ví dụ nội dung cần sao chép
//     copyToClipboard(textToCopy);
//     alert('Đã sao chép!');
// });

