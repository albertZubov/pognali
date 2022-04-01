import React from 'react'
import cl from 'classnames'
import Button from './button/button'

const FieldsetHobby = (props: any) => {
	const { isOpen, onButtonClickOpen } = props

	return (
		<fieldset className='compilation__item compilation__item--hobby'>
			<div className='compilation__wrap-header'>
				<legend className='compilation__legend'>Хобби</legend>
				<Button isOpen={isOpen} onButtonClickOpen={onButtonClickOpen} />
			</div>
			<div
				className={cl(
					'compilation__wrapper compilation__wrapper--hobby',
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
					Спортзал
				</label>
				<label className='compilation__label'>
					<input
						className='compilation__checkbox visually-hidden'
						name='options'
						type='checkbox'
					/>
					<span className='compilation__checkbox-indicator'></span>
					Кальян
				</label>
				<label className='compilation__label'>
					<input
						className='compilation__checkbox visually-hidden'
						name='options'
						type='checkbox'
					/>
					<span className='compilation__checkbox-indicator'></span>
					Диван
				</label>
			</div>
		</fieldset>
	)
}

export default FieldsetHobby
