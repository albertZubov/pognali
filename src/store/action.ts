export const ActionType = {
	LOAD_COUNTRIES: 'LOAD_COUNTRIES',
	LOAD_TRANSPORTS: 'LOAD_TRANSPORTS',
	LOAD_COMPANIONS: 'LOAD_COMPANIONS',
	LOAD_DIRECTIONS: 'LOAD_DIRECTIONS',
}

export const ActionCreator = {
	loadingCountries: (сountries: any) => ({
		type: ActionType.LOAD_COUNTRIES,
		payload: сountries,
	}),

	loadingTransports: (transports: any) => ({
		type: ActionType.LOAD_TRANSPORTS,
		payload: transports,
	}),

	loadingCompanions: (companions: any) => ({
		type: ActionType.LOAD_COMPANIONS,
		payload: companions,
	}),

	loadingDirections: (directions: any) => ({
		type: ActionType.LOAD_DIRECTIONS,
		payload: directions,
	}),
}
