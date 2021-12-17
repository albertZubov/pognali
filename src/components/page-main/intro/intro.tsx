import React from 'react'

const Intro = () => {
	return (
		<section className='intro container'>
			<h1 className='intro__title'>
				В путешествие с&nbsp;крутыми попутчиками!
			</h1>
			<blockquote className='intro__blockquote review'>
				<p className='review__text'>
					«Лучшее приложение, что я видел в жизни!»
				</p>
				<cite className='review__author-name'>
					Мурат Эльтазин главный&nbsp;редактор газеты «гаджетлайф»
				</cite>
			</blockquote>
		</section>
	)
}

export default Intro
