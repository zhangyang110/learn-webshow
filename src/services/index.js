import config from 'config'
import * as tvapi from './tvapi'

const { prefix,apiPrefix } = config

// tvapi.ApiClient.instance.basePath = '/api/v2'
tvapi.ApiClient.instance.basePath = apiPrefix
//tvapi.ApiClient.instance.authentications.Bearer.apiKey = 'bearer ' + window.localStorage.getItem(`${prefix}token`)
tvapi.ApiClient.instance.authentications.Bearer.apiKey = 'bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsiZ3Vlc3QiXSwiZXhwIjo0NjY4NjYzMjY2LCJpYXQiOjE1MTUwNjMyNjYsImlzcyI6IlRWIiwianRpIjoiZ3Vlc3QiLCJzdWIiOiJ7XCJyb2xlXCI6XCJndWVzdFwifSJ9.We9VejvZ_PlvZY-3lW7La9H82smR-jY4qzeTHoMeOxs'

export const AuthApi = new tvapi.AuthApi()
export const GamesApi = new tvapi.GamesApi()
export const ImagesApi = new tvapi.ImagesApi()
export const MoviesApi = new tvapi.MoviesApi()
export const PagesApi = new tvapi.PagesApi()
export const ProfileApi = new tvapi.ProfileApi()
export const ReleasesApi = new tvapi.ReleasesApi()
export const SeriesApi = new tvapi.SeriesApi()
export const TemplatesApi = new tvapi.TemplatesApi()
export const UsersApi = new tvapi.UsersApi()
export const VideosApi = new tvapi.VideosApi()
export const RecommendsApi = new tvapi.RecommendsApi()
export const SubjectsApi = new tvapi.SubjectsApi()
export const SubjectSeriesApi = new tvapi.SubjectSeriesApi()
export const SearchRecommendsApi = new tvapi.SearchRecommendsApi()
export const CollectsApi = new tvapi.CollectsApi()
export const HistorysApi = new tvapi.HistorysApi()
export const FreeSeriesApi = new tvapi.FreeSeriesApi()
export const PlayHistorysApi = new tvapi.PlayHistorysApi()
export const EventsApi = new tvapi.EventsApi()
export const CategorysApi = new tvapi.CategorysApi()

export { ApiClient, CommonResponse, Login, Movie, Release, Series , User ,Video,  } from './tvapi'

