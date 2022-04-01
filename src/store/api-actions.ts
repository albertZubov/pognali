import { AppRoute } from '../const/const'
import { ActionCreator } from './action'

export const fetchData = () => (dispatch: any, _getState: any, api: any) =>
	api.get(AppRoute.DATA).then(({ data }: any) => {
		dispatch(ActionCreator.loadingCompanions(data.companions))
		dispatch(ActionCreator.loadingCountries(data.сountries))
		dispatch(ActionCreator.loadingDirections(data.directions))
		dispatch(ActionCreator.loadingTransports(data.transports))
	})
