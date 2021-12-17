import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import Intro from './intro/intro'
import Options from './options/options'
import AboutUs from './about-us/about-us'
import Directions from './directions/directions'
import Contacts from './contacts/contacts'

const PageMain = () => {
	return (
		<>
			<Header />
			<main className='main'>
				<Intro />
				<Options />
				<AboutUs />
				<Directions />
				<Contacts />
			</main>
			<Footer />
		</>
	)
}

export default PageMain
