import React from 'react'
import cl from 'classnames'
import Button from './button/button'

const FieldsetMusic = (props: any) => {
	const { isOpen, onButtonClickOpen } = props

	return (
		<fieldset className='compilation__item compilation__item--music'>
			<div className='compilation__wrap-header'>
				<legend className='compilation__legend'>Музыка</legend>
				<Button isOpen={isOpen} onButtonClickOpen={onButtonClickOpen} />
			</div>
			<div
				className={cl(
					'compilation__wrapper compilation__wrapper--music',
					isOpen
						? 'compilation__wrapper--opened'
						: 'compilation__wrapper--closed'
				)}
			>
				<label className='compilation__label'>
					<input
						className='compilation__checkbox visually-hidden'
						name='options'
						type='checkbox'
						defaultChecked
					/>
					<span className='compilation__checkbox-indicator'></span>
					Тяжелый рок
				</label>
				<label className='compilation__label'>
					<input
						className='compilation__checkbox visually-hidden'
						name='options'
						type='checkbox'
					/>
					<span className='compilation__checkbox-indicator'></span>
					Русский рэп
				</label>
				<label className='compilation__label'>
					<input
						className='compilation__checkbox visually-hidden'
						name='options'
						type='checkbox'
					/>
					<span className='compilation__checkbox-indicator'></span>
					Евроденс
				</label>
			</div>
		</fieldset>
	)
}

export default FieldsetMusic
