const toggleElement = document.querySelector('#toggleDark');
const body = document.body;
toggleElement.addEventListener('click', () => {
    // Chuyển đổi giữa fa-sun và fa-moon
    toggleElement.classList.toggle('fa-sun');
    toggleElement.classList.toggle('fa-moon');
    // Kiểm tra nếu toggleElement có class 'fa-moon'
    if (toggleElement.classList.contains('fa-moon')) {
        Object.assign(body.style, {
            background: 'white',
            color: '#333',
            transition: '0.5s'
        });
    } else {
        Object.assign(body.style, {
            background: 'black',
            color: '#fff',
            transition: '0.5s'
        });
    }
});
