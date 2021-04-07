import { AxiosResponse } from 'axios';

import { apiService } from 'commonUtils/apiService';
import { MOVIES_URL } from 'endpoints';

export const getMovies = (
  params?: Record<string, string | boolean | number>
): Promise<AxiosResponse> => apiService.get(MOVIES_URL, params);

export const getMovie = (id: number): Promise<AxiosResponse> =>
  apiService.get(`${MOVIES_URL}/${id}`);
