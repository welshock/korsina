const cartWrap = document.querySelector('.cart-wrap')
window.addEventListener('click', e => {
	if (e.target.hasAttribute('data-cart')) {
		const card = e.target.closest('.card')
		const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.product-img').getAttribute('src'),
			title: card.querySelector('.item-title').innerText,
			weight: card.querySelector('.price-weight').innerText,
			price: card.querySelector('.price-cost').innerText,
			count: card.querySelector('[data-count]').innerText,
		}
		const itemCart = cartWrap.querySelector(`[data-id="${productInfo.id}"]`)

		if (itemCart) {
			const counterEl = itemCart.querySelector('[data-count]')
			counterEl.innerText =
				parseInt(counterEl.innerText) + parseInt(productInfo.count)
		} else {
			const cartItemHTML = `
			<div class="card" data-id="${productInfo.id}">
								<img src="${productInfo.imgSrc}" alt="" class="product-img" />
								<h3 class="item-title">${productInfo.title}</h3>
								<p class="text-count">1 шт</p>
								<div class="wrap">
									<div class="item count-wrap">
										<div class="item-control" data-action="minus">-</div>
										<div class="item-count" data-count>${productInfo.count}</div>
										<div class="item-control" data-action="plus">+</div>
									</div>
									<div class="price">
										<div class="price-weight">${productInfo.weight}</div>
										<div class="price-cost">${productInfo.price}</div>
									</div>
								</div>
							</div>
			`
			cartWrap.insertAdjacentHTML('beforeend', cartItemHTML)
		}
		card.querySelector('[data-count]').innerText = '1'
		statusCart()
	}
	updateTotalPrice();
})

const updateTotalPrice = () => {
    let totalPrice = 0;

    cartWrap.querySelectorAll('.card').forEach(item => {
        const price = item.querySelector('.price-cost').innerText.replace(' грн', '');
        const count = item.querySelector('[data-count]').innerText;

        totalPrice += price * count;
    });

    document.querySelector('.total-price').innerText = `${totalPrice} грн`;
}
