import React, { useEffect, useState } from 'react'
import cl from 'classnames'
import Button from './button/button'
import Range from './range/range'

const FieldsetRange = (props: any) => {
	const { isOpen, onButtonClickOpen } = props

	return (
		<fieldset className='compilation__item range'>
			<div className='compilation__wrap-header'>
				<legend className='compilation__legend compilation__legend--range'>
					Левел
				</legend>
				<Button isOpen={isOpen} onButtonClickOpen={onButtonClickOpen} />
			</div>
			<div
				className={cl(
					'compilation__wrapper compilation__wrapper--range',
					isOpen
						? 'compilation__wrapper--opened'
						: 'compilation__wrapper--closed'
				)}
			>
				<Range />
			</div>
		</fieldset>
	)
}

export default FieldsetRange
