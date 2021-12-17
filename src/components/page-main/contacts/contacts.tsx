import React from 'react'

const Contacts = () => {
	return (
		<section className='contacts'>
			<div className='contacts__subscribe subscribe container'>
				<h3 className='contacts__title'>Заинтересовались?</h3>
				<p className='subscribe__text'>
					Зарегистрируйтесь, это&nbsp;быстро&nbsp;и бесплатно!
					Уже&nbsp;зарегистрированы? Тогда скорее
					<a className='subscribe__link' href='login.html'>
						авторизуйтесь
					</a>
				</p>
				<form
					className='subscribe__form'
					action='https://echo.htmlacademy.ru'
					method='post'
				>
					<input
						type='email'
						name='email'
						className='subscribe__email-input'
						placeholder='E-mail'
					/>
					<button type='submit' className='subscribe__btn'>
						<span className='subscribe__btn-text'>Регистрация</span>
					</button>
				</form>
				<p className='subscribe__text'>
					Остались вопросы?
					<span className='subscribe__text-desktop'>
						Свяжитесь с нами удобным для вас способом:
					</span>
				</p>
				<p className='subscribe__wrapper'>
					<a className='subscribe__tel' href='tel:88005558628'>
						8 800 555-86-28
					</a>
					<a className='subscribe__email' href='mailto:mail@htmlacademy.ru'>
						mail@htmlacademy.ru
					</a>
				</p>
			</div>
			<div className='contacts__address map-address container'>
				<a className='map-address__link' href='#'>
					ул. Большая Конюшенная, 19/8
				</a>
				<a
					className='map-address__btn button'
					href='https://yandex.ru/maps/2/saint-petersburg/?ll=30.334289%2C59.939497&amp;mode=routes&amp;rtext=55.750074%2C37.541386~59.938631%2C30.323055&amp;rtt=auto&amp;ruri=ymapsbm1%3A%2F%2Fgeo%3Fll%3D37.541%252C55.750%26spn%3D0.001%252C0.001%26text%3D%25D0%25A0%25D0%25BE%25D1%2581%25D1%2581%25D0%25B8%25D1%258F%252C%2520%25D0%259C%25D0%25BE%25D1%2581%25D0%25BA%25D0%25B2%25D0%25B0%252C%2520%25D0%25A4%25D0%25B8%25D0%25BB%25D1%2591%25D0%25B2%25D1%2581%25D0%25BA%25D0%25B0%25D1%258F%2520%25D0%25BB%25D0%25B8%25D0%25BD%25D0%25B8%25D1%258F%252C%2520%25D0%25BC%25D0%25B5%25D1%2582%25D1%2580%25D0%25BE%2520%25D0%2592%25D1%258B%25D1%2581%25D1%2582%25D0%25B0%25D0%25B2%25D0%25BE%25D1%2587%25D0%25BD%25D0%25B0%25D1%258F~ymapsbm1%3A%2F%2Fgeo%3Fll%3D30.323%252C59.939%26spn%3D0.001%252C0.001%26text%3D%25D0%25A0%25D0%25BE%25D1%2581%25D1%2581%25D0%25B8%25D1%258F%252C%2520%25D0%25A1%25D0%25B0%25D0%25BD%25D0%25BA%25D1%2582-%25D0%259F%25D0%25B5%25D1%2582%25D0%25B5%25D1%2580%25D0%25B1%25D1%2583%25D1%2580%25D0%25B3%252C%2520%25D0%2591%25D0%25BE%25D0%25BB%25D1%258C%25D1%2588%25D0%25B0%25D1%258F%2520%25D0%259A%25D0%25BE%25D0%25BD%25D1%258E%25D1%2588%25D0%25B5%25D0%25BD%25D0%25BD%25D0%25B0%25D1%258F%2520%25D1%2583%25D0%25BB%25D0%25B8%25D1%2586%25D0%25B0%252C%252019%252F8&amp;z=15.01'
				>
					Проложить маршрут
				</a>
			</div>
			<div className='map-container'>
				<iframe
					className='map-container__image'
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.6036253002762!2d30.320858715590223!3d59.93871916905475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca145cc1%3A0x42b32648d8238007!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sIDE5LzgsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTExODY!5e0!3m2!1sru!2sru!4v1565428132797!5m2!1sru!2sru'
				></iframe>
			</div>
		</section>
	)
}

export default Contacts
