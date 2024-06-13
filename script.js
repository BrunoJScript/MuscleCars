const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let item = container.querySelectorAll ('.list .item')
const indicate = document.querySelector('indicators')
let dots = document.querySelectorAll('ul li')



let active = 0
let firstPosition = 0
let lastPosition = item.length - 1



prevButton.onclick = () => {
    console.log("Prev")
    
    let oldItem = container.querySelector('.list .item.active')
    oldItem.classList.remove('active')

    active = active - 1 < firstPosition ? lastPosition : active - 1
    item[active].classList.add('active')
}



nextButton.onclick = () => {
    console.log("Next")

    let oldItem = container.querySelector('.list .item.active')
    oldItem.classList.remove('active')

    active = active + 1 > lastPosition ? 0 : active + 1
    item[active].classList.add('active')

    let oldDots = indicate.querySelector('ul li.active')
    oldDots.classList.remove('active')

    dots[active].classList.add('active')

}
