import React from 'react'

const AboutUs = () => {
	return (
		<section className='about-us container'>
			<h3 className='about-us__title'>О сервисе</h3>
			<p className='about-us__text'>
				Любое путешествие веселее с&nbsp;попутчиками, которые на одной волне с
				тобой! Делитесь своими идеями путешествий и черпайте вдохновение в
				чужих.
			</p>
			<p className='about-us__bold'>
				А если найдете кого-то близкого по духу — скорее зовите
				<span className='about-us__desktop-text'>его</span> в совместный трип!
			</p>
			<a className='about-us__to-all button' href='#'>
				Подробнее
			</a>
		</section>
	)
}

export default AboutUs
