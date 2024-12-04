const statusCart = () => {
	const cartWrap = document.querySelector('.cart-wrap')
	const cartEmpty = document.querySelector('.card-empty')
	const order = document.querySelector('.other')
	const cardTotal = document.querySelector('.card-total')

	if (cartWrap.children.length > 0) {
		cartEmpty.classList.add('none')
		order.classList.remove('none')
		cardTotal.classList.remove('none')
	} else {
		cartEmpty.classList.remove('none')
		order.classList.add('none')
		cardTotal.classList.add('none')
	}
}
