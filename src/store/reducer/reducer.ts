import { extend } from '../../utils/utils'
import { ActionType } from '../action'

const reducer = () => {
	const initialState = {
		сountries: [],
		transports: [],
		directions: [],
		companions: [],
	}

	return (state = initialState, action: any) => {
		switch (action.type) {
			case ActionType.LOAD_COUNTRIES:
				return extend(state, {
					сountries: action.payload,
				})
			case ActionType.LOAD_COMPANIONS:
				return extend(state, {
					companions: action.payload,
				})
			case ActionType.LOAD_DIRECTIONS:
				return extend(state, {
					directions: action.payload,
				})
			case ActionType.LOAD_TRANSPORTS:
				return extend(state, {
					transports: action.payload,
				})
		}

		return state
	}
}

export { reducer }
