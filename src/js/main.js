$(document).ready(function () {
	/*ICON GAMBERGER*/
	(function () {

		"use strict";
		var toggles = document.querySelectorAll(".cmn-toggle-switch");
		for (var i = toggles.length - 1; i >= 0; i--) {
			var toggle = toggles[i];
			toggleHandler(toggle);
		};

		function toggleHandler(toggle) {
			toggle.addEventListener("click", function (e) {
				e.preventDefault();
				(this.classList.contains("active") === true) ? this.classList.remove("active"): this.classList.add("active");
			});
		}

	})();

	const bodyElement = document.querySelector('body')
	const mobileMenuToggle = document.querySelector('#nav-menu-toggle')
	const mobileMenuList = document.querySelector('.header-navigation')
	const pageHeader = document.querySelector('.header')

	mobileMenuToggle.addEventListener('click', function () {

		if (this.classList.contains('active')) {
			mobileMenuList.classList.add('active')
			bodyElement.classList.add('noscroll')
		} else {
			mobileMenuList.classList.remove('active')
			bodyElement.classList.remove('noscroll')

		}
	})


	/*показать / скрыть пароль*/
	const passIconShowPass = document.querySelector('.fa-eye')
	const passIconHidePass = document.querySelector('.fa-eye-slash')
	const passInput = document.querySelector('.form-input--pass')

	passIconShowPass.addEventListener('click', function () {
		if (this.classList.contains('show')) {
			this.classList.remove('show')
			passIconHidePass.classList.add('show')
			passInput.setAttribute('type', 'text')
		} else {
			this.classList.add('show')
			passInput.setAttribute('type', 'password')
			passIconHidePass.classList.remove('show')
		}
	})

	passIconHidePass.addEventListener('click', function () {
		if (this.classList.contains('show')) {
			this.classList.remove('show')
			passIconShowPass.classList.add('show')
			passInput.setAttribute('type', 'password')
		} else {
			this.classList.add('show')
			passIconShowPass.classList.remove('show')
			passInput.setAttribute('type', 'text')
		}
	})



	/*выбор селекта в форме*/
	const selectBlock = document.querySelectorAll('.select-block')

	for (let i = 0; i < selectBlock.length; i++) {

		selectBlock[i].addEventListener('click', function (e) {

			const outInput = selectBlock[i].querySelector('.filters-form-input')
			const itemOptions = selectBlock[i].querySelectorAll('.select-option')
			let optionsDrop = selectBlock[i].querySelector('.select-block-drop')
			let arrowOpenDrop = selectBlock[i].querySelector('.input-arrow')

			// console.log(e.target)
			if (e.target == outInput || e.target == arrowOpenDrop) {
				e.stopPropagation()

				for (let j = 0; j < selectBlock.length; j++) {
					if (j != i) {
						selectBlock[j].querySelector('.select-block-drop').classList.add('hide')
						selectBlock[j].querySelector('.input-arrow').classList.remove('rotate')
					}
				}

				if (optionsDrop.classList.contains('hide')) {

					arrowOpenDrop.classList.add('rotate')
					optionsDrop.classList.remove('hide')

				} else {

					optionsDrop.classList.add('hide')
					arrowOpenDrop.classList.remove('rotate')
				}

			}

			const itemOptionsArray = Array.from(itemOptions)

			for (let i = 0; i < itemOptionsArray.length; i++) {

				if (e.target == itemOptionsArray[i]) {
					e.stopPropagation()

					const selectValue = itemOptionsArray[i].textContent
					outInput.value = selectValue
					optionsDrop.classList.add('hide')
					arrowOpenDrop.classList.remove('rotate')
				}
			}


		})

	}

	/*filters*/
	const iconToggleFilters = document.querySelector(' .show-filters')
	const filtersBlock = document.querySelector('.filters-form')
	if (iconToggleFilters) {
		iconToggleFilters.addEventListener('click', function () {
			let thistext = this.textContent

			if (thistext == 'Показать фильтры') {
				filtersBlock.classList.add('showed')
				this.textContent = 'Скрыть фильтры'
			} else {
				filtersBlock.classList.remove('showed')
				this.textContent = 'Показать фильтры'
			}
		})
	}


	/*при ресайзе экрана*/
	var oldWindowWidth = window.innerWidth;

	window.addEventListener('resize', function () {
		if (oldWindowWidth != window.innerWidth) {

			mobileMenuList.classList.remove('active');
			mobileMenuToggle.classList.remove('active');
			bodyElement.classList.remove('noscroll')
			oldWindowWidth = window.innerWidth
		}

	})

	//-rus-list
	const rusListCard = document.querySelectorAll('.ruslist .card')
	const rusListCardHead = document.querySelectorAll('.ruslist-table-row')

	for (let i = 0; i < rusListCard.length; i++) {

		const rusListCardTitle = rusListCard[i].querySelector('.ruslist-table-row')

		rusListCardTitle.addEventListener('click', function () {
			for (let j = 0; j < rusListCardHead.length; j++) {
				rusListCardHead[j].classList.remove('active-panel')

			}
			const rusListCardDrop = this.nextElementSibling
			if (rusListCardDrop.classList.contains('show')) {
				this.classList.remove('active-panel')
			} else {
				this.classList.add('active-panel')
			}
		})


	}

	// 	// const rusListItems = rusListTitle[i].nextElementSibling
	// 	const rusListItems = rusListTitle[i].querySelector('.ruslist-table-cell__title-list')
	// 	const rusListArrow = rusListTitle[i].querySelector('.ruslist-title-arrow')
	// 	rusListTitle[i].addEventListener('click', function () {
	// 		if (rusListItems.classList.contains('archive')) {
	// 			rusListItems.classList.remove('archive')
	// 			rusListArrow.classList.add('rotate')
	// 		} else {
	// 			rusListItems.classList.add('archive')
	// 			rusListArrow.classList.remove('rotate')
	// 		}

	// 	})
	// }

	// rules-accordion-arrow
	const rulesAccordion = document.querySelector('#rules-accordion')
	const rulesAccordionCards = rulesAccordion.querySelectorAll('.card')
	const rulesAccordionArrows = rulesAccordion.querySelectorAll('.input-arrow')
	const rulesCardHeader = rulesAccordion.querySelectorAll('.card-header')


	for (let i = 0; i < rulesAccordionCards.length; i++) {

		const rulesAccordionCardButton = rulesAccordionCards[i].querySelector('.card-header')
		const rulesAccordionCardArrow = rulesAccordionCards[i].querySelector('.input-arrow')
		const rulesAccordionCardDrop = rulesAccordionCards[i].querySelector('.collapse')


		rulesAccordionCardButton.addEventListener('click', function () {

			for (let i = 0; i < rulesAccordionArrows.length; i++) {
				rulesAccordionArrows[i].classList.remove('rotate')
			}
			for (let i = 0; i < rulesCardHeader.length; i++) {
				rulesCardHeader[i].classList.remove('active')
			}
			if (rulesAccordionCardDrop.classList.contains('show')) {
				rulesAccordionCardArrow.classList.remove('rotate')
				rulesAccordionCardButton.classList.remove('active')

			} else {
				rulesAccordionCardArrow.classList.add('rotate')
				rulesAccordionCardButton.classList.add('active')
			}
		})
	}



})