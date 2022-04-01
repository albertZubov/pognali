import React from 'react'
import styles from './button.module.scss'
import cl from 'classnames'

const Button = ({
	isOpen,
	onButtonClickOpen,
}: {
	isOpen: boolean
	onButtonClickOpen: React.MouseEventHandler<HTMLButtonElement>
}) => {
	return (
		<button
			onClick={onButtonClickOpen}
			className={cl(styles.button, isOpen ? '' : styles.active)}
			type='button'
		></button>
	)
}

export default Button
