import { AxiosRequestConfig } from './types'
import xhr from './core/xhr';

function axios(config: AxiosRequestConfig) {
  xhr(config);
}

export default axios
