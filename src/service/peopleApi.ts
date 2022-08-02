import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_PATHS } from 'api/apiPaths';
import type { GetPeopleResponseSuccess, GetCharacterResponseSuccess } from 'types/people';

export const peopleApi = createApi({
  reducerPath: 'peopleApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: builder => ({
    getAllPeople: builder.query<GetPeopleResponseSuccess, void>({
      query: () => ({
        method: 'GET',
        url: API_PATHS.PEOPLE._,
      }),
    }),
    getCharacterById: builder.query<GetCharacterResponseSuccess, string>({
      query: id => API_PATHS.PEOPLE.BY_ID(id),
    }),
  }),
});

export const { useGetAllPeopleQuery, useGetCharacterByIdQuery } = peopleApi;
