import React from 'react'

const Footer = () => {
	return (
		<footer className='footer container'>
			<a className='footer__logo'>
				<img src='' alt='' />
			</a>
			<div className='footer__social footer-social'>
				<ul className='footer-social__list'>
					<li className='footer-social__item'>
						<a
							className='footer-social__link footer-social__link--facebook'
							href='https://www.facebook.com/htmlacademy'
						>
							<span className='visually-hidden'>Мы в Фейсбуке</span>
							<svg
								fill='#192144'
								className='footer-social__link-image footer-social__link-image--facebook'
								version='1.1'
								xmlns='http://www.w3.org/2000/svg'
								x='0px'
								y='0px'
								viewBox='0 0 11 21'
								xmlSpace='preserve'
								width='11'
								height='21'
							>
								<use xlinkHref='#icon-facebook'></use>
							</svg>
						</a>
					</li>
					<li className='footer-social__item'>
						<a
							className='footer-social__link footer-social__link--vkontakte'
							href='https://vk.com/htmlacademy'
						>
							<span className='visually-hidden'>Мы в Вконтакте</span>
							<svg
								fill='#192144'
								className='footer-social__link-image footer-social__link-image--vkontakte'
								version='1.1'
								xmlns='http://www.w3.org/2000/svg'
								x='0px'
								y='0px'
								viewBox='0 0 30 15.8'
								xmlSpace='preserve'
								width='23'
								height='12'
							>
								<use xlinkHref='#icon-vkontakte'></use>
							</svg>
						</a>
					</li>
					<li className='footer-social__item'>
						<a
							className='footer-social__link footer-social__link--instagram'
							href='https://www.instagram.com/htmlacademy'
						>
							<span className='visually-hidden'>Мы в Инстаграме</span>
							<svg
								fill='#192144'
								className='footer-social__link-image footer-social__link-image--instagram'
								version='1.1'
								xmlns='http://www.w3.org/2000/svg'
								x='0px'
								y='0px'
								viewBox='0 0 23 23'
								xmlSpace='preserve'
								width='18'
								height='18'
							>
								<use xlinkHref='#icon-instagram'></use>
							</svg>
						</a>
					</li>
				</ul>
			</div>
			<a
				className='footer__copyright'
				href='https://htmlacademy.ru/intensive/adaptive'
			>
				<b className='footer__copyright-text'>Разработано:</b>
				<img
					className='footer__copyright-image'
					src='img/htmlacademy.svg'
					width='16'
					height='16'
					alt='html academy'
				/>
			</a>
		</footer>
	)
}

export default Footer
