let recommendations = [
    {name: 'Iron Age', Link:"https://ironagekoreansteakhouse.com/"},
    {name: 'Marlows Tavern', Link:"https://www.marlowstavern.com/"},
    {name: 'Teds Montana Grill', Link:"https://www.tedsmontanagrill.com/"},
    {name: 'Provinos', Link:"https://provinos.com/"},
    {name: 'Frankies The Steakhouse', Link:"https://www.frankiesthesteakhouse.com/"},
    {name: 'Local Republic', Link:"https://www.localrepublic.com/"},
    {name: 'Old Fountain Tavern', Link:"http://theoldfountaintavern.com/"},
    {name: 'Friends American Grill', Link:"https://www.friendsamericangrill.com/"},
    {name: 'City Lines Bar and Grill', Link:"https://citylinesbarandgrill.com/"},
    {name: 'Monterrey Mexican Grill', Link:"https://monterreymexgrill.com/"},
]
const recName = document.querySelector('#recommendationName')
const recLink = document.querySelector('#recommendationLink')

const recBtn = document.querySelector('#recommendation')
function randomRecommendation(evt){
    const randomRec = recommendations[Math.floor(Math.random() * recommendations.length)]
    recName.textContent = randomRec.name
    recLink.textContent = randomRec.Link
    recLink.href = randomRec.Link


}
recBtn.addEventListener('click', randomRecommendation)