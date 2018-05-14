import axios from 'axios'
import { BAR_API_URL } from './bars.constants'

export function getBars () { return axios.get(BAR_API_URL) }
