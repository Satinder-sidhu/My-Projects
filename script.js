const DarkMode = document.querySelector('#mode')
const Dashboard = document.querySelector('.dashboard')

const Card = document.querySelectorAll('.card')
const Status = document.querySelectorAll('.status')
const Header = document.querySelector('header')

console.log(Card, Status)

DarkMode.addEventListener('change', ()=>{
    if(DarkMode.checked){
        document.body.classList.add('dark')
        Dashboard.classList.add('dark')
        Array.from(Card).forEach((c)=>{
            c.classList.add('dark')
        })
        Array.from(Status).forEach((status)=>{
            status.classList.add('dark')
        })
        Header.classList.add('dark')
    }
    else{
        document.body.classList.remove('dark')
        Dashboard.classList.remove('dark')
        Array.from(Card).forEach((c)=>{
            c.classList.remove('dark')
        })
        Array.from(Status).forEach((status)=>{
            status.classList.remove('dark')
        })
        Header.classList.remove('dark')
    }
})