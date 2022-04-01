import React, { useState } from 'react'
import styles from './range.module.scss'
import cl from 'classnames'

const InputValue = {
	MIN: 0,
	MAX: 100,
	STEP: 1,
}

const Range = () => {
	const { MIN, MAX, STEP } = InputValue
	const [valueLeft, setValueLeft] = useState(MIN)
	const [valueRight, setValueRight] = useState(MAX)

	const handleSeekChangeStart = (event: any) => {
		const { target } = event
		if (+target.value <= valueRight) {
			setValueLeft(target.value)
		} else {
			setValueLeft(+valueRight)
			event.preventDefault()
		}

		if (target.value < MIN) {
			setValueLeft(MIN)
		}
	}

	const handleSeekChangeEnd = (event: any) => {
		const { target } = event
		if (+target.value >= +valueLeft) {
			setValueRight(target.value)
		} else {
			setValueRight(+valueLeft)
			event.preventDefault()
		}

		if (target.value > MAX) {
			setValueRight(MAX)
		}
	}

	return (
		<>
			<p className={styles.range}>
				<input
					onChange={handleSeekChangeStart}
					type='text'
					className={styles.value}
					value={valueLeft}
					min={MIN}
					max={MAX}
					step={STEP}
				/>
				<input
					type='text'
					className={styles.value}
					value={valueRight}
					onChange={handleSeekChangeEnd}
					min={MIN}
					max={MAX}
					step={STEP}
				/>
			</p>
			<div className={styles.bar}>
				<div
					className={styles.interval}
					style={{
						width: `${MAX - valueLeft - (MAX - valueRight)}%`,
						left: `${valueLeft}%`,
					}}
				></div>
				<input
					className={cl(styles.toggle, styles.left)}
					onChange={handleSeekChangeStart}
					type='range'
					min={MIN}
					max={MAX}
					step={STEP}
					value={valueLeft ? valueLeft : MIN}
				/>
				<input
					className={cl(styles.toggle, styles.right)}
					onChange={handleSeekChangeEnd}
					type='range'
					min={MIN}
					max={MAX}
					step={STEP}
					value={valueRight ? valueRight : MAX}
				/>
			</div>
		</>
	)
}

export default Range
