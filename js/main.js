/*console.log('sosi hyu')
let regExp = new RegExp('w+', 'g')
console.log(regExp)
let date = new Date()
console.log(date)
let error = Error('clown')
console.log(error)*/






/*function foo(a) {
	return a**2
}
console.log(foo(2))
let bar = function(a) {
	console.log(a)
}
bar(2)
let arrow = a => console.log(a)
arrow(3)*/





/*
let multyStr = 'Привет\n' +
'Мир\n' +
'!'
console.log(multyStr)
let arrStr = [
'Привет',
'Мир',
'!',
].join('\n')
console.log(arrStr)*/


/*let templateStr = `
Привет
Мир
!
`
console.log(templateStr)*/

'use strict'

const modalAdd = document.querySelector('.modal__add'),
	addAd = document.querySelector('.add__ad'),
	modalBtnSubmit = document.querySelector('.modal__btn-submit'),
	modalSubmit = document.querySelector('.modal__submit')

addAd.addEventListener('click', () => {
	modalAdd.classList.remove('hide')
	modalBtnSubmit.disabled = true
})

modalAdd.addEventListener('click', event => {
	const target = event.target
	if (target.classList.contains('modal__close') || target === modalAdd) {
		modalAdd.classList.add('hide')
		modalSubmit.reset()
	}
})
