const input = document.querySelector('.input')
const btnEnter = document.querySelector('.enter')       //ELEMENTS
const btnExit = document.querySelector('.exit')
const login = document.querySelector('.login')
const welcome = document.querySelector('.welcome')

//function to save the name when loading the page
const saveName = localStorage.getItem('name') 
if (saveName){
    input.value = saveName 
    login.classList.add('loginN')
    btnExit.style.display = 'block'             
    welcome.innerHTML = `welcome, ${input.value}`
}

 //here where saved the name
btnEnter.addEventListener('click', () => {   
    if(input.value === ''){
        alert('[ERROR]')
    }else{
        localStorage.setItem('name', input.value)
        login.classList.add('loginN')
        btnExit.style.display = 'block'             
        welcome.innerHTML = `welcome, ${input.value}`
    }
}) 

//here where delete
btnExit.addEventListener('click', () =>{
    input.value = ''
    localStorage.removeItem('name')
    login.classList.remove('loginN')
    welcome.innerHTML = ''
    btnExit.style.display = 'none'             

})