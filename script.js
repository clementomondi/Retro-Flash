// Add JavaScript code here
const icon = document.querySelector('.icon');
const inbox = document.querySelector('.inbox');
const closeIcon = document.querySelector('.close-icon');
const closecon = document.querySelector('.close-con');
const stars = document.querySelectorAll('.star a');
const anchors = document.querySelectorAll("a");
stars.forEach((item, index1) => {
    item.addEventListener('click', () => {
        stars.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add('active') : star.classList.remove('active')
        })
    })
})
icon.addEventListener('click', () => {
    inbox.classList.remove('active');
})
closeIcon.addEventListener('click', () => {
    inbox.classList.add('active');
})
closecon.addEventListener('click', () => {
    inbox.classList.add('active');
})
anchors.forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault()
    })
})