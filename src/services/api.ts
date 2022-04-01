import axios, { AxiosError, AxiosResponse } from 'axios'

const BACKEND_URL = 'https://db-project-pognali.glitch.me'
const REQUEST_TIMEOUT = 5000

export const createAPI = () => {
	const api = axios.create({
		baseURL: BACKEND_URL,
		timeout: REQUEST_TIMEOUT,
		withCredentials: false,
	})

	const onSuccess = (response: AxiosResponse<any>) => response

	const onFail = (err: AxiosError<any>) => {
		throw err
	}

	api.interceptors.response.use(onSuccess, onFail)

	return api
}
