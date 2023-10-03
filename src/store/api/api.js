import{createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const API_URL = "http://localhost:3001/recipe"
export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Recipe'],
    baseQuery:fetchBaseQuery({
        baseUrl:API_URL,
    }),
    endpoints: builder=>({
        getRecipes: builder.query({
            query:()=>"/",
            providesTags:()=>[{
                type:"Recipe"
            }]
        })
    })
})
export const {useGetRecipesQuery} = api