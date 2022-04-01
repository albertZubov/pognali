import React from 'react'
import cl from 'classnames'
import Button from './button/button'
import WaysForm from '../../roster/ways/ways-form'

const FieldsetTransport = (props: any) => {
	const { isOpen, onButtonClickOpen } = props

	return (
		<fieldset className='compilation__item compilation__item--transport transport'>
			<div className='compilation__wrap-header'>
				<legend className='compilation__legend compilation__legend--transport'>
					Транспорт
				</legend>
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
				<WaysForm />
			</div>
		</fieldset>
	)
}

export default FieldsetTransport
