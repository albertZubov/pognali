import React from 'react'
import cl from 'classnames'
import styles from './ways.module.scss'
import { connect } from 'react-redux'
import { getTransports } from '../../../../store/selectors'

const WaysForm = ({ transports }: any) => {
	return (
		<ul className={styles.ways}>
			{transports.map((transport: any) => (
				<li
					className={cl(styles.item, styles['item-form'])}
					key={transport.nameValue}
				>
					<label className={styles.label}>
						<input
							className={cl('visually-hidden', styles.input)}
							name='transport'
							type='checkbox'
						/>
						<img
							className={styles.img}
							src={transport.img}
							width={transport.width}
							height={transport.height}
							alt={transport.nameValue}
						/>
					</label>
					<span className='visually-hidden'>{transport.name}</span>
				</li>
			))}
		</ul>
	)
}

const mapStateToProps = (state: any) => ({
	transports: getTransports(state),
})

export default connect(mapStateToProps)(WaysForm)
