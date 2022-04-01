import React from 'react'
import cl from 'classnames'
import Button from './button/button'

const FieldsetFood = (props: any) => {
	const { isOpen, onButtonClickOpen } = props

	return (
		<fieldset className='compilation__item compilation__item--food'>
			<div className='compilation__wrap-header'>
				<legend className='compilation__legend'>Еда</legend>
				<Button isOpen={isOpen} onButtonClickOpen={onButtonClickOpen} />
			</div>
			<div
				className={cl(
					'compilation__wrapper compilation__wrapper--food',
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
					Мясоед
				</label>
				<label className='compilation__label'>
					<input
						className='compilation__checkbox visually-hidden'
						name='options'
						type='checkbox'
					/>
					<span className='compilation__checkbox-indicator'></span>
					Сидит на ПП
				</label>
				<label className='compilation__label'>
					<input
						className='compilation__checkbox visually-hidden'
						name='options'
						type='checkbox'
					/>
					<span className='compilation__checkbox-indicator'></span>
					Веган-сыроед
				</label>
			</div>
		</fieldset>
	)
}

export default FieldsetFood
