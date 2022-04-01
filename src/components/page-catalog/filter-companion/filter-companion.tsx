import React, { useState } from 'react'
import cl from 'classnames'
import CountryFilter from '../country-filter/country-filter'
import Roster from '../roster/roster'
import FilterFieldsets from './filter-fieldsets'

const FilterCompanion = () => {
	const [isFlag, setIsFlag] = useState(true)

	return (
		<section className='filter-companion'>
			<section
				className={cl('country-filter country-filter-popup container', {
					'country-filter--closed': isFlag,
				})}
			>
				<div className='country-filter-popup__wrapper'>
					<h3 className='country-filter-popup__head'>
						<span className='country-filter-popup__mobile-head'>
							Фильтрация по странам:
						</span>
					</h3>
					<ul className='country-filter-popup__list'>
						<li className='country-filter-popup__item'>
							<a
								href='#'
								className='country-filter-popup__link country-filter-popup__link--active'
							>
								Европа
							</a>
						</li>
						<li className='country-filter-popup__item'>
							<a href='#' className='country-filter-popup__link'>
								Азия
							</a>
						</li>
						<li className='country-filter-popup__item'>
							<a href='#' className='country-filter-popup__link'>
								Америка
							</a>
						</li>
						<li className='country-filter-popup__item'>
							<a href='#' className='country-filter-popup__link'>
								острова
							</a>
						</li>
					</ul>
					<button
						onClick={() => setIsFlag(!isFlag)}
						className='country-filter__toggle'
						type='button'
					>
						{isFlag ? 'Показать все' : 'Свернуть'}
					</button>
				</div>
				<CountryFilter />
				<button type='button' className='country-filter-popup__close button'>
					<span
						onClick={() => setIsFlag(!isFlag)}
						className='country-filter-popup__close-text'
					>
						Свернуть
					</span>
				</button>
			</section>
			<section className='wrapper-companion container'>
				<Roster />
				<div className='compilation'>
					<form
						className='compilation__form'
						method='get'
						action='https://echo.htmlacademy.ru'
					>
						<h3 className='compilation__head'>
							Подберите идеального попутчика
						</h3>
						<FilterFieldsets />
						<button className='compilation__btn button' type='submit'>
							Показать
						</button>
					</form>
				</div>
			</section>
		</section>
	)
}

export default FilterCompanion
