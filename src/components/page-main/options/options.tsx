import React from 'react'

const OptionsItem = [
	'Выберите направление',
	'Изучите идеи путешественников',
	'Находите тех, кто похож на вас',
	'Путешествуйте вместе!',
]

const Options = () => {
	return (
		<section className='options container'>
			<ol className='options__list'>
				{OptionsItem.map((item, id) => (
					<li className={`options__item options__item--${id + 1}`} key={item}>
						{item}
					</li>
				))}
			</ol>
		</section>
	)
}

export default Options
