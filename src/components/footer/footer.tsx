import React from 'react'

const Footer = () => {
	return (
		<footer className='footer container'>
			<a className='footer__logo'>
				<img
					className='footer__logo-image'
					src='img/logo-black.webp'
					width='100'
					height='19'
					alt='Погнали?'
				/>
			</a>
			<div className='footer__social footer-social'>
				<ul className='footer-social__list'>
					<li className='footer-social__item'>
						<a
							className='footer-social__link footer-social__link--facebook'
							href='https://www.facebook.com/htmlacademy'
						>
							Мы в Фейсбуке
						</a>
					</li>
					<li className='footer-social__item'>
						<a
							className='footer-social__link footer-social__link--vkontakte'
							href='https://vk.com/htmlacademy'
						>
							Мы в Вконтакте
						</a>
					</li>
					<li className='footer-social__item'>
						<a
							className='footer-social__link footer-social__link--instagram'
							href='https://www.instagram.com/htmlacademy'
						>
							Мы в Инстаграме
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
					src='img/icons/htmlacademy.svg'
					width='16'
					height='16'
					alt='html academy'
				/>
			</a>
		</footer>
	)
}

export default Footer
