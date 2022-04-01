import React, { useState } from 'react'

const withAddActive = (NewComponent: any, bool: boolean) =>
	function FilterFieldsetHOC() {
		const [isOpen, setIsOpen] = useState(bool)

		return (
			<NewComponent
				isOpen={isOpen}
				onButtonClickOpen={() => setIsOpen(!isOpen)}
			/>
		)
	}

export default withAddActive
