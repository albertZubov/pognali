import React from 'react'
import { connect } from 'react-redux'
import { getDirections } from '../../../store/selectors'

const Directions = ({ directionsItem }: any) => {
	return (
		<section className='directions container'>
			<ul className='directions__list'>
				{directionsItem.map((item: any) => (
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
				<a className='directions__to-all button' href='form.html'>
					Показать все
				</a>
			</div>
		</section>
	)
}

const mapStateToProps = (state: any) => ({
	directionsItem: getDirections(state),
})

export default connect(mapStateToProps)(Directions)
