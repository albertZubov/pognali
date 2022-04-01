import React from 'react'
import cl from 'classnames'
import styles from './ways.module.scss'
import { connect } from 'react-redux'
import { getTransports } from '../../../../store/selectors'

const Ways = ({
	waysActive,
	transports,
}: {
	waysActive: string[]
	transports: any
}) => {
	return (
		<ul className={styles.ways}>
			{transports.map((transport: any) => (
				<li className={styles.item} key={transport.nameValue}>
					<img
						className={cl(
							styles.img,
							waysActive.some((el: string) => el === transport.nameValue)
								? styles.active
								: ''
						)}
						src={transport.img}
						width={transport.width}
						height={transport.height}
						alt={transport.nameValue}
					/>
					<span className={styles.description}>{transport.name}</span>
				</li>
			))}
		</ul>
	)
}

const mapStateToProps = (state: any) => ({
	transports: getTransports(state),
})

export default connect(mapStateToProps)(Ways)
