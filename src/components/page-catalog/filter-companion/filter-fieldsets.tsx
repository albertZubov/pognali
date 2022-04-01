import React from 'react'
import FieldsetFood from './fieldsets/fieldset-food'
import FieldsetHobby from './fieldsets/fieldset-hobby'
import FieldsetMusic from './fieldsets/fieldset-music'
import FieldsetRange from './fieldsets/fieldset-range'
import FieldsetTransport from './fieldsets/fieldset-transport'
import withAddActive from './with-add-active'

const FilterFieldsets = () => {
	const FieldsetFoodHOC = withAddActive(FieldsetFood, false)
	const FieldsetHobbyHOC = withAddActive(FieldsetHobby, false)
	const FieldsetMusicHOC = withAddActive(FieldsetMusic, true)
	const FieldsetRangeHOC = withAddActive(FieldsetRange, true)
	const FieldsetTransportHOC = withAddActive(FieldsetTransport, true)

	return (
		<>
			<FieldsetHobbyHOC />
			<FieldsetMusicHOC />
			<FieldsetFoodHOC />
			<FieldsetTransportHOC />
			<FieldsetRangeHOC />
		</>
	)
}

export default FilterFieldsets
