import React from 'react'

const Header = () => {
	return (
		<header className='header container'>
			<a className='header__logo'>
				<img
					className='header__logo-image'
					src='img/logo.png'
					width='100'
					height='19'
					alt='Погнали?'
				/>
			</a>

			<nav className='main-nav'>
				<ul className='main-nav__list site-list'>
					<li className='site-list__item site-list__item--active'>
						<a className='site-list__link' href='#'>
							<span
								className='site-list__link-text'
								data-hover='О&nbsp;сервисе'
							>
								О сервисе
							</span>
						</a>
					</li>
					<li className='site-list__item'>
						<a className='site-list__link' href='form.html'>
							<span className='site-list__link-text' data-hover='Направления'>
								Направления
							</span>
						</a>
					</li>
					<li className='site-list__item'>
						<a className='site-list__link' href='catalog.html'>
							<span className='site-list__link-text' data-hover='Попутчики'>
								Попутчики
							</span>
						</a>
					</li>
				</ul>
				<ul className='main-nav__list user-list'>
					<li className='user-list__item'>
						<a
							className='user-list__button user-list__button--tel'
							href='tel:88005558628'
						>
							<img
								className='user-list__button-image user-list__button-image--tel'
								src='img/icons/topmenu-phone.svg'
								alt='telephone'
								width='16'
								height='16'
							/>
							Телефон
						</a>
					</li>
					<li className='user-list__item'>
						<a
							className='user-list__button user-list__button--email'
							href='mailto:mail@htmlacademy.ru'
						>
							<img
								className='user-list__button-image user-list__button-image--email'
								src='img/icons/topmenu-mail.svg'
								alt='email'
								width='16'
								height='16'
							/>
							Почта
						</a>
					</li>
					<li className='user-list__item'>
						<a className='user-list__login button' href='login.html'>
							Авторизация
						</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
