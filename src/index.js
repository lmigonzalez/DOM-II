
import './less/index.less'

// Your code goes here!
const headerLogo = document.querySelector('.logo-heading');

const navLinks = document.querySelectorAll('.nav a');

const header = document.querySelector('header');

const destination = document.querySelectorAll('.destination .btn');

const introImg = document.querySelector('.intro img')

const introH2 = document.querySelector('.intro h2');

const intro = document.querySelector('.intro')

const introP = document.querySelector('.intro p')



// const container = document.querySelector('.container')


// mouseover
headerLogo.addEventListener('mouseover', addMouseOver)

function addMouseOver(e){
	e.target.style.fontSize = '2rem'
}

// keydown
navLinks.forEach(function(element){
	element.addEventListener('keydown', addKeyDown)
})

function addKeyDown(e){
	e.target.style.color = 'blue'
}

// wheel

header.addEventListener('wheel', changeColor)

function changeColor(e){
	e.target.style.backgroundColor = '#6A5495'
}

//load

// window.addEventListener('load', () => {
// 	window.alert('Welcome to Fun Bus')
//   });


//click

destination.forEach(function(element){
	element.addEventListener('click', focusBtn)
})


function focusBtn(e){
	e.target.style.fontSize = '1rem'
}

// mouseout

destination[0].addEventListener('mouseout', keyDownBtn)

function keyDownBtn(e){
	e.target.style.backgroundColor = '#6A5495'
}

// mouseover

destination[1].addEventListener('mouseover', mouseOverBtn)

function mouseOverBtn(e){
	e.target.style.backgroundColor = '#ED5EDD'
}


// scroll

window.addEventListener('scroll', changecolor)

function changecolor(e){
	introH2.style.color = 'red'
}



// select
console.log('hello')
introH2.addEventListener('select', changeText);

function changeText(e){

	e.target.style.backgroundColor = '#8BDB81'
}

// mouseenter

intro.addEventListener('mouseenter', mouseEnter)

function mouseEnter(e) {
	introP.style.fontSize = '2rem'
}


// mousemove

introImg.addEventListener('mousemove', mouseMove)

function mouseMove(e){
	introH2.style.fontSize = '4rem'
}