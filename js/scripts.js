WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]


document.addEventListener('DOMContentLoaded', function () {
	// Main slider
	let mainSlider = document.querySelector('.main_slider .swiper')

	if (mainSlider) {
		new Swiper('.main_slider .swiper', {
			loop: true,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			}
		})
	}


	// Products slider
	const productsSliders = [],
		products = document.querySelectorAll('.products .swiper.main')

	products.forEach((el, i) => {
		el.classList.add('products_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 12,
					slidesPerView: 2
				},
				480: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 4
				},
				1280: {
					spaceBetween: 32,
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.product')),
				resize: swiper => {
					let products = swiper.el.querySelectorAll('.product')

					products.forEach(el => el.style.height = 'auto')

					setHeight(products)
				}
			}
		}

		productsSliders.push(new Swiper('.products_s' + i, options))
	})


	// Product thumbs slider
	const productThumbsSliders = [],
		productThumbs = document.querySelectorAll('.product .images .swiper')

	productThumbs.forEach((el, i) => {
		el.classList.add('product_thumbs_s' + i)

		let options = {
			loop: false,
			speed: 500,
			nested: true,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			lazy: true,
			spaceBetween: 0,
			slidesPerView: 1
		}

		productThumbsSliders.push(new Swiper('.product_thumbs_s' + i, options))
	})


	// Stocks slider
	const stocksSliders = [],
		stocks = document.querySelectorAll('.stocks .swiper')

	stocks.forEach((el, i) => {
		el.classList.add('stocks_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 24,
					slidesPerView: 'auto'
				},
				1024: {
					slidesPerView: 1,
					spaceBetween: 24
				}
			}
		}

		stocksSliders.push(new Swiper('.stocks_s' + i, options))
	})


	// Gallery slider
	const gallerySliders = [],
		gallery = document.querySelectorAll('.gallery .swiper')

	gallery.forEach((el, i) => {
		el.classList.add('gallery_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			slidesPerView: 'auto',
			breakpoints: {
				0: {
					spaceBetween: 24
				},
				1280: {
					spaceBetween: 32
				}
			}
		}

		gallerySliders.push(new Swiper('.gallery_s' + i, options))
	})


	// Articles slider
	const articlesSliders = [],
		articles = document.querySelectorAll('.articles .swiper')

	articles.forEach((el, i) => {
		el.classList.add('articles_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 24,
					slidesPerView: 'auto'
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1280: {
					spaceBetween: 32,
					slidesPerView: 2
				}
			}
		}

		articlesSliders.push(new Swiper('.articles_s' + i, options))
	})


	// Product data tabs slider
	const productTabsSliders = [],
		productTabs = document.querySelectorAll('.product_data .tabs.swiper')

	productTabs.forEach((el, i) => {
		el.classList.add('product_tabs_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 'auto'
		}

		productTabsSliders.push(new Swiper('.product_tabs_s' + i, options))
	})


	// Gallery tabs slider
	const galleryTabsSliders = [],
		galleryTabs = document.querySelectorAll('.gallery_info .tabs.swiper')

	galleryTabs.forEach((el, i) => {
		el.classList.add('gallery_tabs_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 'auto'
		}

		galleryTabsSliders.push(new Swiper('.gallery_tabs_s' + i, options))
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: 'Закрыть',
		NEXT: 'Следующий',
		PREV: 'Предыдущий',
		MODAL: 'Вы можете закрыть это модальное окно нажав клавишу ESC'
	}

	Fancybox.defaults.tpl = {
		closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg><use xlink:href="images/sprite.svg#ic_close"></use></svg></button>',

		main: `<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
			<div class="fancybox__backdrop"></div>
			<div class="fancybox__carousel"></div>
			<div class="fancybox__footer"></div>
		</div>`,
	}


	// Modals
	$('.modal_btn').click(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: document.getElementById(e.target.getAttribute('data-modal')),
			type: 'inline'
		}])
	})


	// Zoom images
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false
		},
		Thumbs: {
			autoStart: false
		}
	})


	// Close modals
	$('.modal .close_btn').click(e => {
		e.preventDefault()

		Fancybox.close()
	})


	// Tabs
	var locationHash = window.location.hash

	$('body').on('click', '.tabs .btn', function(e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			let parent = $(this).closest('.tabs_container'),
				activeTab = $(this).data('content'),
				activeTabContent = $(activeTab),
				level = $(this).data('level')

			parent.find('.tabs:first .btn').removeClass('active')
			parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			activeTabContent.addClass('active')
		}
	})

	if (locationHash && $('.tabs_container').length) {
		let activeTab = $(`.tabs button[data-content="${locationHash}"]`),
			activeTabContent = $(locationHash),
			parent = activeTab.closest('.tabs_container'),
			level = activeTab.data('level')

		parent.find('.tabs:first .btn').removeClass('active')
		parent.find('.tab_content.' + level).removeClass('active')

		activeTab.addClass('active')
		activeTabContent.addClass('active')

		$('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
	}


	// Catalog
	$('.catalog_info .spoler_btn').click(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.sub')

		$(this).toggleClass('active')
		parent.find('.hide').slideToggle(300)
	})


	// Dealers
	$('.dealers .item .spoler_btn').click(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.item')

		$(this).find('spoler_btn').toggleClass('active')
		parent.find('.map_wrap').slideToggle(300)
	})


	// Modals
	$('.modal_btn').click(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: document.getElementById(e.target.getAttribute('data-modal')),
			type: 'inline'
		}])
	})


	// Zoom images
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false
		},
		Thumbs: {
			autoStart: false
		}
	})


	// Mob. menu
	$('.mob_header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').addClass('active')
		$('body').addClass('menu_open')
		$('header').addClass('show')
		$('.overlay').fadeIn(300)
	})

	$('header .mob_close_btn, .overlay').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').removeClass('active')
		$('body').removeClass('menu_open')
		$('header').removeClass('show')
		$('.overlay').fadeOut(300)
	})


	// 'Up' button
	$('.buttonUp .btn').click((e) => {
		e.preventDefault()

		$('body, html').stop(false, false).animate({ scrollTop: 0 }, 1000)
	})


	// Phone input mask
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
				lazy: true
			})
		})
	}


	// Select file
	const fileInputs = document.querySelectorAll('form input[type=file]')

	if (fileInputs) {
		fileInputs.forEach(el => {
			el.addEventListener('change', () => el.closest('.file').querySelector('label span').innerText = el.value)
		})
	}


	// Изменение количества товара
	$('body').on('click', '.amount .minus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			minimum = parseFloat($input.data('minimum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal > minimum) $input.val(inputVal - step + unit)
	})

	$('body').on('click', '.amount .plus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			maximum = parseFloat($input.data('maximum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal < maximum) $input.val(inputVal + step + unit)
	})

	$('.amount .input').keydown(function () {
		const _self = $(this),
			maximum = parseInt(_self.data('maximum'))

		setTimeout(() => {
			if (_self.val() == '' || _self.val() == 0) _self.val(parseInt(_self.data('minimum')))
			if (_self.val() > maximum) _self.val(maximum)
		})
	})


	// Custom select - Nice select
	const selects = document.querySelectorAll('select:not(.skip)')

	if (selects) {
		selects.forEach(el => {
			NiceSelect.bind(el, {
				placeholder: el.getAttribute('data-placeholder')
			})

			el.addEventListener('change', () => el.classList.add('selected'))
		})
	}


	// Filter
	$('.mob_filter_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
		$('.filter form').slideToggle(300)
	})


	$('.filter .name').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').next('.data').slideToggle(300)
	})


	$priceRange = $('.filter #price_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 10000,
		from: 250,
		to: 8520,
		step: 10,
		grid: true,
		onChange: data => {
			$('.filter .price_range input.from').val(data.from.toLocaleString())
			$('.filter .price_range input.to').val(data.to.toLocaleString())

			$('.filter .price_range .values .from').text(data.from.toLocaleString())
			$('.filter .price_range .values .to').text(data.to.toLocaleString())
		},
		onUpdate: data => {
			$('.filter .price_range input.from').val(data.from.toLocaleString())
			$('.filter .price_range input.to').val(data.to.toLocaleString())

			$('.filter .price_range .values .from').text(data.from.toLocaleString())
			$('.filter .price_range .values .to').text(data.to.toLocaleString())
		}
	}).data('ionRangeSlider')

	$('.filter .price_range .input').keyup(function () {
		$priceRange.update({
			from: parseInt($('.filter .price_range input.from').val().replace(/\s/g, '')),
			to: parseInt($('.filter .price_range input.to').val().replace(/\s/g, ''))
		})
	})


	$('.filter .spoler_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').closest('.data').find('.hide').slideToggle(300)
	})


	$('.filter .reset_btn').click(function() {
		if($priceRange) {
			$priceRange.reset()
		}
	})


	// Product view
	$('.products_head .view .grid_btn').click(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.content')

		$('.products_head .view .btn').removeClass('active')
		$(this).addClass('active')

		parent.find('.products > .list').addClass('row').removeClass('list')
	})

	$('.products_head .view .list_btn').click(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.content')

		$('.products_head .view .btn').removeClass('active')
		$(this).addClass('active')

		parent.find('.products > .row').addClass('list').removeClass('row')
	})


	// Smooth scrolling to anchor
	const scrollBtns = document.querySelectorAll('.scroll_btn')

	if (scrollBtns) {
		scrollBtns.forEach(element => {
			element.addEventListener('click', e => {
				e.preventDefault()

				let anchor = element.getAttribute('data-anchor')

				if($('.tabs .btn[data-content="#'+ anchor +'"]').length) {
					let activeTab = $('.tabs .btn[data-content="#'+ anchor +'"]'),
						parent = activeTab.closest('.tabs_container')

					parent.find('.tabs .btn').removeClass('active')
					parent.find('.tab_content').removeClass('active')

					activeTab.addClass('active')
					$('#' + anchor).addClass('active')

					document.querySelector('.tabs_container').scrollIntoView({
						behavior: 'smooth',
						block: 'start'
					}, 1000)
				} else {
					document.getElementById(anchor).scrollIntoView({
						behavior: 'smooth',
						block: 'start'
					}, 1000)
				}
			})
		})
	}


	// Product page
	if ($('.product_info .images').length) {
		const productThumbs = new Swiper('.product_info .thumbs .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 16,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 12,
					slidesPerView: 4
				},
				768: {
					spaceBetween: 16,
					slidesPerView: 6
				},
				1024: {
					spaceBetween: 16,
					slidesPerView: 4
				}
			}
		})

		new Swiper('.product_info .big .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 24,
			slidesPerView: 1,
			lazy: true,
			thumbs: {
				swiper: productThumbs
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			}
		})
	}


	// Accordion
	$('body').on('click', '.accordion .accordion_item .head', function(e) {
		e.preventDefault()

		let item = $(this).closest('.accordion_item'),
			accordion = $(this).closest('.accordion')

		if (item.hasClass('active')) {
			item.removeClass('active').find('.data').slideUp(300)
		} else {
			accordion.find('.accordion_item').removeClass('active')
			accordion.find('.data').slideUp(300)

			item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Mini popups
	$('.mini_modal_btn').click(function(e) {
		e.preventDefault()

		const modalId = $(this).data('modal-id')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$('.mini_modal').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		} else {
			$('.mini_modal_btn').removeClass('active')
			$(this).addClass('active')

			$('.mini_modal').removeClass('active')
			$(modalId).addClass('active')

			if (modalId == '#search_modal') {
				setTimeout(() => $(modalId).find('.input').focus())
			}

			if (is_touch_device()) $('body').css('cursor', 'pointer')
		}
	})

	// Close the popup when clicking outside of it
	$(document).click(e => {
		if ($(e.target).closest('.modal_cont').length === 0) {
			$('.mini_modal, .mini_modal_btn').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		}
	})

	// Close the popup when you click on the cross in the popup
	$('.mini_modal .close_btn').click(e => {
		e.preventDefault()

		$('.mini_modal, .mini_modal_btn').removeClass('active')

		if (is_touch_device()) $('body').css('cursor', 'default')
	})


	// Product to cart
	$('.product .buy_btn').click(function(e) {
		e.preventDefault()

		Fancybox.show([{
			src: '#added_to_cart_success',
			type: 'inline'
		}])
	})


	// Catalog modal
	$('header .catalog .main a').mouseover(function(e) {
		let parentIndex = $(this).closest('div').index()

		$('header .catalog .main a').removeClass('active')
		$(this).addClass('active')

		$('header .catalog .sub').removeClass('show')
		$('header .catalog .sub' + (parentIndex + 1)).addClass('show')
	})


	if (is_touch_device() && WW > 1023) {
		$('header .catalog .main a').click(function(e) {
			e.preventDefault()

			let parentIndex = $(this).closest('div').index()

			$('header .catalog .main a').removeClass('active')
			$(this).addClass('active')

			$('header .catalog .sub').removeClass('show')
			$('header .catalog .sub' + (parentIndex + 1)).addClass('show')
		})
	}


	// Animate
	const boxes = document.querySelectorAll('.animate')

	function scrollTracking(entries) {
		for (const entry of entries) {
			if (entry.intersectionRatio >= 0.15 && !entry.target.classList.contains('animated')) {
				entry.target.classList.add('animated')
			}
		}
	}

	const observer = new IntersectionObserver(scrollTracking, {
		threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
	})

	boxes.forEach(element => observer.observe(element))
})



window.addEventListener('load', function () {
	// Fix. header
	headerInit = true,
	headerHeight = $('header').outerHeight()

	$('header:not(.absolute)').wrap('<div class="header_wrap"></div>')
	$('.header_wrap').height(headerHeight)

	if (headerInit && $(window).scrollTop() > 0) {
		$('header').addClass('fixed light')
	} else {
		$('header').removeClass('fixed')
		$('header:not(.absolute)').removeClass('light')
	}
})



window.addEventListener('scroll', function () {
	// Fix. header
	if (typeof headerInit !== 'undefined' && headerInit && $(window).scrollTop() > 0) {
		$('header').addClass('fixed light')
	} else {
		$('header').removeClass('fixed')
		$('header:not(.absolute)').removeClass('light')
	}
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || BODY.clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Overwrite window width
		WW = window.innerWidth || document.clientWidth || BODY.clientWidth


		// Fix. header
		headerInit = false
		$('.header_wrap').height('auto')

		setTimeout(() => {
			headerInit   = true
			headerHeight = $('header').outerHeight()

			$('.header_wrap').height(headerHeight)

			if (headerInit && $(window).scrollTop() > 0) {
				$('header').addClass('fixed light')
			} else {
				$('header').removeClass('fixed')
				$('header:not(.absolute)').removeClass('light')
			}
		}, 100)


		// Product view
		if (WW < 768) {
			$('.products_head .view .btn').removeClass('active')
			$('.products_head .view .grid_btn').addClass('active')

			$('.products > .list').addClass('row').removeClass('list')
		}


		// Mob. version
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})