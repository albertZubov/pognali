import { formattingСountriesToObj } from '../utils/utils'

export const getCountries = (state: any) =>
	formattingСountriesToObj(state.сountries)

export const getCompanions = (state: any) => state.companions
export const getTransports = (state: any) => state.transports
export const getDirections = (state: any) => state.directions
