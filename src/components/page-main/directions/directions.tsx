import React from 'react'

const DirectionsItem = [
	{
		imgSrc: '../../../img/thailand.webp',
		value: 'thailand',
		name: 'Тайланд',
		numberPeople: 18321,
		tagline: 'Джугли зовут!',
	},
	{
		imgSrc: '../../../img/france.webp',
		value: 'france',
		name: 'Франция',
		numberPeople: 12518,
		tagline: 'Трэ бьен, манифик!',
	},
	{
		imgSrc: '../../../img/czech.webp',
		value: 'czech',
		name: 'Чехия',
		numberPeople: 5326,
		tagline: 'Закоулки старой Европы',
	},
]

const Directions = () => {
	return (
		<section className='directions container'>
			<ul className='directions__list'>
				{DirectionsItem.map((item) => (
					<li className='directions__item' key={item.numberPeople}>
						<div
							className={`directions__item-wrapper directions__item-wrapper--${item.value}`}
						>
							<b className='directions__name'>{item.name}</b>
							<p className='directions__tagline'>{item.tagline}</p>
							<span className='directions__people'>{item.numberPeople}</span>
						</div>
						<img
							className='directions__image'
							src={item.imgSrc}
							width='270'
							height='110'
							alt={item.value}
						/>
					</li>
				))}
			</ul>
			<div className='directions__text-wrapper'>
				<h3 className='directions__title'>Направления</h3>
				<p className='directions__text'>
					Мы не продаем туры и&nbsp;ничего не рекламируем. Люди сами пишут о
					странах, куда хотели бы отправиться и чем можно там заняться.
				</p>
			</div>
			<a className='directions__to-all button' href='form.html'>
				Показать все
			</a>
		</section>
	)
}

export default Directions
