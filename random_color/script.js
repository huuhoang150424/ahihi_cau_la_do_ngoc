const buttonElement=document.querySelector('#result')
const body=document.body
const colors=['red','white','black','green','blur']
buttonElement.addEventListener('click',()=>{
    const r=colors[Math.floor(Math.random()*colors.length)]
    body.style.background=r
    body.style.transition='1s linear'
})
