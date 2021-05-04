import { AxiosResponse } from 'axios';

import { apiService } from 'api/apiService';
import { MOVIES_URL } from 'endpoints';

export const getMovies = (
  params?: Record<string, string | boolean | number>
): Promise<AxiosResponse> => apiService.get(MOVIES_URL, params);

export const getMovie = (id: number): Promise<AxiosResponse> =>
  apiService.get(`${MOVIES_URL}/${id}`);

export const postMovie = (movie: Record<string, any>): Promise<AxiosResponse> =>
  apiService.post(MOVIES_URL, movie);

export const delMovie = (id: number): Promise<AxiosResponse> =>
  apiService.del(`${MOVIES_URL}/${id}`);

export const editMovie = (movie: Record<string, any>): Promise<AxiosResponse> =>
  apiService.put(MOVIES_URL, movie);
