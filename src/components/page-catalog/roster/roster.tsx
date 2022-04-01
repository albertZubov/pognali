import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getCompanions } from '../../../store/selectors'
import Ways from './ways/ways'

const imageLike = {
	active: './img/icons/heart-active.svg',
	notActive: './img/icons/heart.svg',
}

const Roster = ({ companions }: any) => {
	return (
		<section className='roster'>
			<h2 className='visually-hidden'>Список попутчиков</h2>
			<ul className='roster__list'>
				{companions.map((companion: any) => {
					const [isLike, setIsLike] = useState(companion.likes)
					return (
						<li className='roster__item companion' key={companion.nameValue}>
							<a
								className='companion__image-link'
								href={`profile-${companion.nameValue}.html`}
							>
								<img
									src={companion.img}
									width='70'
									height='70'
									alt='foto'
									className='companion__image'
								/>
							</a>
							<div className='companion__block companion__block--left'>
								<a
									className='companion__name'
									href={`profile-${companion.nameValue}.html`}
								>
									{companion.name}
								</a>
								<p className='companion__hashtag'>{companion.hashtags}</p>
								<div className='companion__btn-wrapper'>
									<a
										className='companion__btn button'
										href={`profile-${companion.nameValue}.html`}
									>
										Позвать!
									</a>
									<p className='companion__likes'>
										<span
											className='companion__likes-box'
											onClick={() => setIsLike(!isLike)}
										>
											<img
												className='companion__likes-image'
												src={isLike ? imageLike.active : imageLike.notActive}
												alt='like'
												width='20'
												height='17'
											/>
										</span>
										{companion.numberOfLikes}
									</p>
								</div>
							</div>
							<div className='companion__block companion__block--right'>
								<p className='visually-hidden'>хочет посетить:</p>
								<ul
									className={`companion__country country country--${companion.nameValue}`}
								>
									{companion.countries.map((country: any) => (
										<li className='country__item' key={country.nameValue}>
											<img
												className='country__image'
												src={country.img}
												width='35'
												height='24'
												alt={country.nameValue}
											/>
											<b className='country__name'>{country.name}</b>
										</li>
									))}
								</ul>
								<div className='companion__item-wrapper'>
									<div className='companion__wrapper'>
										<p className='visually-hidden'>транспорт:</p>
										<Ways waysActive={companion.ways} />
									</div>
									<div className='companion__wrapper companion__wrapper--level progressbar'>
										<p className='visually-hidden'>левел:</p>
										<div
											className={`companion__progressbar progressbar__c100 p${companion.level}`}
										>
											<span className='companion__status-number'>
												{companion.level}
											</span>
											<span className='companion__status-lvl'>level</span>
											<div className='progressbar__slice'>
												<div className='progressbar__bar'></div>
												<div className='progressbar__fill'></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
					)
				})}
			</ul>
			<a className='roster__btn button' href='travelers.html'>
				Показать еще
			</a>
			<ul className='roster__pagination pagination'>
				<li className='pagination__item'>
					<a className='pagination__link pagination__link--active' href='#'>
						1
					</a>
				</li>
				<li className='pagination__item'>
					<a className='pagination__link' href='#'>
						2
					</a>
				</li>
				<li className='pagination__item'>
					<a className='pagination__link' href='#'>
						3
					</a>
				</li>
				<li className='pagination__item'>
					<a className='pagination__link' href='#'>
						4
					</a>
				</li>
			</ul>
		</section>
	)
}

const mapStateToProps = (state: any) => ({
	companions: getCompanions(state),
})

export default connect(mapStateToProps)(Roster)
