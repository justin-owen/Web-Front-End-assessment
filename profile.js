const prevPage = document.querySelector('#prev-page')
const homePage = document.querySelector('#profile-name')
const favColor = document.querySelector('#color')
const favPlace = document.querySelector('#place')
const favRitual = document.querySelector('#ritual')
const linkedIn = document.querySelector('#linked-in')
const gitHub = document.querySelector('#git-hub')
function prevPageRedirect(){
    location.href = './home.html'
}
prevPage.addEventListener('click', prevPageRedirect)
homePage.addEventListener('click', prevPageRedirect)
function displayFavColor(){
    alert('My favorite color is Blue!')
}
function displayFavRitual(){
    alert('My favorite ritual is Petting my dog every time I see her!')
}
function displayFavPlace(){
    alert('My favorite place is Sydney!')
}
favColor.addEventListener('click', displayFavColor)
favRitual.addEventListener('click', displayFavRitual)
favPlace.addEventListener('click', displayFavPlace)
function goToGithub(){
    window.open('https://github.com/justin-owen')
    
}
function goToLinkedin(){
    window.open('https://www.linkedin.com/in/justin-owen1')
}
linkedIn.addEventListener('click', goToLinkedin)
gitHub.addEventListener('click', goToGithub)
