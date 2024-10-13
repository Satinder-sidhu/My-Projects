const DarkMode = document.querySelector('#mode')
const Dashboard = document.querySelector('.dashboard')
const Cards = document.querySelectorAll('.card')
const Status = document.querySelectorAll('.status')
const Header = document.querySelector('header')



DarkMode.addEventListener('change', ()=>{
    if(DarkMode.checked){
        document.body.classList.add('dark')
        Dashboard.classList.add('dark')
        Header.classList.add('dark')
        Cards.forEach((card)=>{
            card.classList.add('dark')
        })
        Status.forEach((status)=>{
            status.classList.add('dark')
        })
        
    }
    else{
        document.body.classList.remove('dark')
        Dashboard.classList.remove('dark')
        Header.classList.remove('dark')
        Cards.forEach((card)=>{
            card.classList.remove('dark')
        })
        Status.forEach((status)=>{
            status.classList.remove('dark')
        })
        
    }
})