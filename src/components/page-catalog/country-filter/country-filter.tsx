import React from 'react'
import { connect } from 'react-redux'
import { getCountries } from '../../../store/selectors'

const CountryFilter = ({ countries }: any) => {
	return (
		<div className='country-filter-popup__table country-filter-table'>
			{Object.keys(countries).map((letter: string) => (
				<div className='country-filter-table__cell letter' key={letter}>
					<a className='country-filter-table__link'>{letter}</a>
					{countries[letter].map((country: string) => (
						<ul className='letter__list' key={country}>
							<li className='letter__item'>
								<a href='#0' className='letter__link'>
									{country}
								</a>
							</li>
						</ul>
					))}
				</div>
			))}
		</div>
	)
}

const mapStateToProps = (state: any) => ({
	countries: getCountries(state),
})

export default connect(mapStateToProps)(CountryFilter)
