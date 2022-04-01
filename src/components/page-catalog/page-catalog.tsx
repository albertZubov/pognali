import React from 'react'
import { Link } from 'react-router-dom'
import { AppClient } from '../../const/const'
import Footer from '../footer/footer'
import Header from '../header/header'
import FilterCompanion from './filter-companion/filter-companion'

const PageCatalog = () => {
	return (
		<>
			<Header />
			<main className='main'>
				<div className='main__head container'>
					<h1 className='main__title'>Попутчики</h1>
					<Link className='main__link' to={AppClient.ROOT}>
						На главную
					</Link>
				</div>
				<FilterCompanion />
			</main>
			<Footer />
		</>
	)
}

export default PageCatalog
