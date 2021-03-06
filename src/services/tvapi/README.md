# tvapi

Tvapi - JavaScript client for tvapi
The TV Backend api v3.0
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 3.0
- Package version: 3.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install tvapi --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Tvapi = require('tvapi');

var api = new Tvapi.AuthApi()

var body = new Tvapi.Login(); // {Login} The login credentials

api.authLoginPost(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://localhost/api/v3*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Tvapi.AuthApi* | [**authLoginPost**](docs/AuthApi.md#authLoginPost) | **POST** /auth/login | login with name and password
*Tvapi.AuthApi* | [**authLogoutPost**](docs/AuthApi.md#authLogoutPost) | **POST** /auth/logout | logout
*Tvapi.CategorysApi* | [**categorysGet**](docs/CategorysApi.md#categorysGet) | **GET** /categorys | Returns all category in the database.
*Tvapi.CategorysApi* | [**categorysIdGet**](docs/CategorysApi.md#categorysIdGet) | **GET** /categorys/{id} | 
*Tvapi.CategorysApi* | [**categorysIdPut**](docs/CategorysApi.md#categorysIdPut) | **PUT** /categorys/{id} | put category
*Tvapi.CategorysApi* | [**categorysPost**](docs/CategorysApi.md#categorysPost) | **POST** /categorys | create a category
*Tvapi.CollectsApi* | [**collectsDelete**](docs/CollectsApi.md#collectsDelete) | **DELETE** /collects | 
*Tvapi.CollectsApi* | [**collectsGet**](docs/CollectsApi.md#collectsGet) | **GET** /collects | Returns all collect in the database.
*Tvapi.CollectsApi* | [**collectsIdDelete**](docs/CollectsApi.md#collectsIdDelete) | **DELETE** /collects/{id} | 
*Tvapi.CollectsApi* | [**collectsIdGet**](docs/CollectsApi.md#collectsIdGet) | **GET** /collects/{id} | 
*Tvapi.CollectsApi* | [**collectsIdPut**](docs/CollectsApi.md#collectsIdPut) | **PUT** /collects/{id} | put collect
*Tvapi.CollectsApi* | [**collectsPost**](docs/CollectsApi.md#collectsPost) | **POST** /collects | create a collect
*Tvapi.EventsApi* | [**eventsEventIdGet**](docs/EventsApi.md#eventsEventIdGet) | **GET** /events/{eventId} | 
*Tvapi.EventsApi* | [**eventsExtraParameterDetailGet**](docs/EventsApi.md#eventsExtraParameterDetailGet) | **GET** /events/extra_parameter_detail | get event extra_parameter_detail.
*Tvapi.EventsApi* | [**eventsExtraParameterKeyGet**](docs/EventsApi.md#eventsExtraParameterKeyGet) | **GET** /events/extra_parameter_key | get event extra_parameter_key.
*Tvapi.EventsApi* | [**eventsGet**](docs/EventsApi.md#eventsGet) | **GET** /events | get event statistics detail.
*Tvapi.EventsApi* | [**eventsPost**](docs/EventsApi.md#eventsPost) | **POST** /events | create a events
*Tvapi.FreeSeriesApi* | [**freeSeriesGet**](docs/FreeSeriesApi.md#freeSeriesGet) | **GET** /freeSeries | Returns all freeSeries in the database.
*Tvapi.FreeSeriesApi* | [**freeSeriesIdGet**](docs/FreeSeriesApi.md#freeSeriesIdGet) | **GET** /freeSeries/{id} | 
*Tvapi.FreeSeriesApi* | [**freeSeriesIdPut**](docs/FreeSeriesApi.md#freeSeriesIdPut) | **PUT** /freeSeries/{id} | put freeSeries
*Tvapi.FreeSeriesApi* | [**freeSeriesPost**](docs/FreeSeriesApi.md#freeSeriesPost) | **POST** /freeSeries | create a freeSeries
*Tvapi.GamesApi* | [**gamesGet**](docs/GamesApi.md#gamesGet) | **GET** /games | Returns all game in the database.
*Tvapi.GamesApi* | [**gamesIdGet**](docs/GamesApi.md#gamesIdGet) | **GET** /games/{id} | 
*Tvapi.GamesApi* | [**gamesIdPut**](docs/GamesApi.md#gamesIdPut) | **PUT** /games/{id} | put game
*Tvapi.HistorysApi* | [**historysGet**](docs/HistorysApi.md#historysGet) | **GET** /historys | Returns all history in the database.
*Tvapi.HistorysApi* | [**historysIdDelete**](docs/HistorysApi.md#historysIdDelete) | **DELETE** /historys/{id} | 
*Tvapi.HistorysApi* | [**historysIdGet**](docs/HistorysApi.md#historysIdGet) | **GET** /historys/{id} | 
*Tvapi.HistorysApi* | [**historysIdPut**](docs/HistorysApi.md#historysIdPut) | **PUT** /historys/{id} | put history
*Tvapi.HistorysApi* | [**historysPost**](docs/HistorysApi.md#historysPost) | **POST** /historys | create a history
*Tvapi.ImagesApi* | [**imagesGet**](docs/ImagesApi.md#imagesGet) | **GET** /images | Returns all the images
*Tvapi.ImagesApi* | [**imagesIdContentPut**](docs/ImagesApi.md#imagesIdContentPut) | **PUT** /images/{id}/content | put image
*Tvapi.ImagesApi* | [**imagesIdTagPut**](docs/ImagesApi.md#imagesIdTagPut) | **PUT** /images/{id}/tag | put image
*Tvapi.ImagesApi* | [**imagesPost**](docs/ImagesApi.md#imagesPost) | **POST** /images | upload image
*Tvapi.LeaderboardsApi* | [**leaderboardsGet**](docs/LeaderboardsApi.md#leaderboardsGet) | **GET** /leaderboards | Returns all leaderboards in the database.
*Tvapi.LeaderboardsApi* | [**leaderboardsIdGet**](docs/LeaderboardsApi.md#leaderboardsIdGet) | **GET** /leaderboards/{id} | 
*Tvapi.LeaderboardsApi* | [**leaderboardsIdPut**](docs/LeaderboardsApi.md#leaderboardsIdPut) | **PUT** /leaderboards/{id} | put leaderboards
*Tvapi.LeaderboardsApi* | [**leaderboardsPost**](docs/LeaderboardsApi.md#leaderboardsPost) | **POST** /leaderboards | create a leaderboards
*Tvapi.MoviesApi* | [**moviesGet**](docs/MoviesApi.md#moviesGet) | **GET** /movies | Returns all movie in the database.
*Tvapi.MoviesApi* | [**moviesIdGet**](docs/MoviesApi.md#moviesIdGet) | **GET** /movies/{id} | 
*Tvapi.MoviesApi* | [**moviesIdPut**](docs/MoviesApi.md#moviesIdPut) | **PUT** /movies/{id} | put movie
*Tvapi.MoviesApi* | [**moviesPost**](docs/MoviesApi.md#moviesPost) | **POST** /movies | create a movie
*Tvapi.MoviesApi* | [**moviesUrlIdGet**](docs/MoviesApi.md#moviesUrlIdGet) | **GET** /movies/url/{id} | 
*Tvapi.PagesApi* | [**pagesGet**](docs/PagesApi.md#pagesGet) | **GET** /pages | Returns all page in the database.
*Tvapi.PagesApi* | [**pagesIdContentPut**](docs/PagesApi.md#pagesIdContentPut) | **PUT** /pages/{id}/content | save the content to the draft version of the specific page
*Tvapi.PagesApi* | [**pagesIdGet**](docs/PagesApi.md#pagesIdGet) | **GET** /pages/{id} | return the draft version (version 0 ) of the specific page
*Tvapi.PagesApi* | [**pagesPost**](docs/PagesApi.md#pagesPost) | **POST** /pages | create a page with the given name
*Tvapi.PlayHistorysApi* | [**playHistorysTopListGet**](docs/PlayHistorysApi.md#playHistorysTopListGet) | **GET** /playHistorys/top_list | get playHistorys top_list.
*Tvapi.ProfileApi* | [**profileGet**](docs/ProfileApi.md#profileGet) | **GET** /profile | get profile
*Tvapi.ProfileApi* | [**profilePasswordPost**](docs/ProfileApi.md#profilePasswordPost) | **POST** /profile/password | set password
*Tvapi.RecommendsApi* | [**recommendsGet**](docs/RecommendsApi.md#recommendsGet) | **GET** /recommends | Returns all recommend in the database.
*Tvapi.RecommendsApi* | [**recommendsIdGet**](docs/RecommendsApi.md#recommendsIdGet) | **GET** /recommends/{id} | 
*Tvapi.RecommendsApi* | [**recommendsIdPut**](docs/RecommendsApi.md#recommendsIdPut) | **PUT** /recommends/{id} | put recommend
*Tvapi.RecommendsApi* | [**recommendsPost**](docs/RecommendsApi.md#recommendsPost) | **POST** /recommends | create a recommend
*Tvapi.ReleasesApi* | [**releasesGet**](docs/ReleasesApi.md#releasesGet) | **GET** /releases | Returns all app in the database.
*Tvapi.ReleasesApi* | [**releasesPost**](docs/ReleasesApi.md#releasesPost) | **POST** /releases | upload image
*Tvapi.ReleasesApi* | [**releasesUpgradeGet**](docs/ReleasesApi.md#releasesUpgradeGet) | **GET** /releases/upgrade | get the latest version.
*Tvapi.SearchRecommendsApi* | [**searchRecommendsGet**](docs/SearchRecommendsApi.md#searchRecommendsGet) | **GET** /searchRecommends | Returns all searchRecommends in the database.
*Tvapi.SearchRecommendsApi* | [**searchRecommendsIdGet**](docs/SearchRecommendsApi.md#searchRecommendsIdGet) | **GET** /searchRecommends/{id} | 
*Tvapi.SearchRecommendsApi* | [**searchRecommendsIdPut**](docs/SearchRecommendsApi.md#searchRecommendsIdPut) | **PUT** /searchRecommends/{id} | put searchRecommends
*Tvapi.SearchRecommendsApi* | [**searchRecommendsPost**](docs/SearchRecommendsApi.md#searchRecommendsPost) | **POST** /searchRecommends | create a searchRecommends
*Tvapi.SeriesApi* | [**seriesGet**](docs/SeriesApi.md#seriesGet) | **GET** /series | Returns all series in the database.
*Tvapi.SeriesApi* | [**seriesIdGet**](docs/SeriesApi.md#seriesIdGet) | **GET** /series/{id} | 
*Tvapi.SeriesApi* | [**seriesIdPut**](docs/SeriesApi.md#seriesIdPut) | **PUT** /series/{id} | put series
*Tvapi.SeriesApi* | [**seriesPost**](docs/SeriesApi.md#seriesPost) | **POST** /series | create a series
*Tvapi.SubjectSeriesApi* | [**subjectSeriesGet**](docs/SubjectSeriesApi.md#subjectSeriesGet) | **GET** /subjectSeries | Returns all subjectSeries in the database.
*Tvapi.SubjectSeriesApi* | [**subjectSeriesIdGet**](docs/SubjectSeriesApi.md#subjectSeriesIdGet) | **GET** /subjectSeries/{id} | 
*Tvapi.SubjectSeriesApi* | [**subjectSeriesIdPut**](docs/SubjectSeriesApi.md#subjectSeriesIdPut) | **PUT** /subjectSeries/{id} | put subjectSeries
*Tvapi.SubjectSeriesApi* | [**subjectSeriesPost**](docs/SubjectSeriesApi.md#subjectSeriesPost) | **POST** /subjectSeries | create a subjectSeries
*Tvapi.SubjectsApi* | [**subjectsGet**](docs/SubjectsApi.md#subjectsGet) | **GET** /subjects | Returns all subject in the database.
*Tvapi.SubjectsApi* | [**subjectsIdGet**](docs/SubjectsApi.md#subjectsIdGet) | **GET** /subjects/{id} | 
*Tvapi.SubjectsApi* | [**subjectsIdPut**](docs/SubjectsApi.md#subjectsIdPut) | **PUT** /subjects/{id} | put subject
*Tvapi.SubjectsApi* | [**subjectsPost**](docs/SubjectsApi.md#subjectsPost) | **POST** /subjects | create a subject
*Tvapi.TemplatesApi* | [**templatesGet**](docs/TemplatesApi.md#templatesGet) | **GET** /templates | Returns all template in the database.
*Tvapi.TemplatesApi* | [**templatesIdContentPut**](docs/TemplatesApi.md#templatesIdContentPut) | **PUT** /templates/{id}/content | Retrieves a template
*Tvapi.TemplatesApi* | [**templatesIdGet**](docs/TemplatesApi.md#templatesIdGet) | **GET** /templates/{id} | Retrieves a account
*Tvapi.TemplatesApi* | [**templatesIdPublishPut**](docs/TemplatesApi.md#templatesIdPublishPut) | **PUT** /templates/{id}/publish | Retrieves a account
*Tvapi.TemplatesApi* | [**templatesIdsGet**](docs/TemplatesApi.md#templatesIdsGet) | **GET** /templates/ids | get template by ids.
*Tvapi.TemplatesApi* | [**templatesPost**](docs/TemplatesApi.md#templatesPost) | **POST** /templates | Creates a new template
*Tvapi.UsersApi* | [**usersGet**](docs/UsersApi.md#usersGet) | **GET** /users | Returns all user in the database.
*Tvapi.UsersApi* | [**usersIdEnablePut**](docs/UsersApi.md#usersIdEnablePut) | **PUT** /users/{id}/enable | modify enable
*Tvapi.UsersApi* | [**usersIdGet**](docs/UsersApi.md#usersIdGet) | **GET** /users/{id} | Retrieves a user
*Tvapi.UsersApi* | [**usersIdPermissionPut**](docs/UsersApi.md#usersIdPermissionPut) | **PUT** /users/{id}/permission | modify permission
*Tvapi.UsersApi* | [**usersPost**](docs/UsersApi.md#usersPost) | **POST** /users | Creates a new user
*Tvapi.VideosApi* | [**videosGet**](docs/VideosApi.md#videosGet) | **GET** /videos | Returns all video in the database.
*Tvapi.VideosApi* | [**videosIdGet**](docs/VideosApi.md#videosIdGet) | **GET** /videos/{id} | 
*Tvapi.VideosApi* | [**videosIdPut**](docs/VideosApi.md#videosIdPut) | **PUT** /videos/{id} | put video
*Tvapi.VideosApi* | [**videosPost**](docs/VideosApi.md#videosPost) | **POST** /videos | create a video
*Tvapi.VideosApi* | [**videosUpdateShowNamesPost**](docs/VideosApi.md#videosUpdateShowNamesPost) | **POST** /videos/update_showNames | update showname by name
*Tvapi.VideosApi* | [**videosVideoNamePost**](docs/VideosApi.md#videosVideoNamePost) | **POST** /videos/video_name | get the latest name.


## Documentation for Models

 - [Tvapi.Category](docs/Category.md)
 - [Tvapi.Collect](docs/Collect.md)
 - [Tvapi.CommonResponse](docs/CommonResponse.md)
 - [Tvapi.Error](docs/Error.md)
 - [Tvapi.Event](docs/Event.md)
 - [Tvapi.EventDetail](docs/EventDetail.md)
 - [Tvapi.EventExtraParameterDetail](docs/EventExtraParameterDetail.md)
 - [Tvapi.Font](docs/Font.md)
 - [Tvapi.FreeSeries](docs/FreeSeries.md)
 - [Tvapi.Game](docs/Game.md)
 - [Tvapi.History](docs/History.md)
 - [Tvapi.InlineResponse200](docs/InlineResponse200.md)
 - [Tvapi.InlineResponse2001](docs/InlineResponse2001.md)
 - [Tvapi.InlineResponse2002](docs/InlineResponse2002.md)
 - [Tvapi.InlineResponse2003](docs/InlineResponse2003.md)
 - [Tvapi.InlineResponse2004](docs/InlineResponse2004.md)
 - [Tvapi.InlineResponse2005](docs/InlineResponse2005.md)
 - [Tvapi.InlineResponse2006](docs/InlineResponse2006.md)
 - [Tvapi.Leaderboard](docs/Leaderboard.md)
 - [Tvapi.Login](docs/Login.md)
 - [Tvapi.Movie](docs/Movie.md)
 - [Tvapi.Page](docs/Page.md)
 - [Tvapi.PageCell](docs/PageCell.md)
 - [Tvapi.PageCellSpecialIcon](docs/PageCellSpecialIcon.md)
 - [Tvapi.PageContent](docs/PageContent.md)
 - [Tvapi.PageSection](docs/PageSection.md)
 - [Tvapi.Recommend](docs/Recommend.md)
 - [Tvapi.Release](docs/Release.md)
 - [Tvapi.SearchRecommend](docs/SearchRecommend.md)
 - [Tvapi.Series](docs/Series.md)
 - [Tvapi.Subject](docs/Subject.md)
 - [Tvapi.SubjectSeries](docs/SubjectSeries.md)
 - [Tvapi.Template](docs/Template.md)
 - [Tvapi.TemplateCell](docs/TemplateCell.md)
 - [Tvapi.TemplateContent](docs/TemplateContent.md)
 - [Tvapi.User](docs/User.md)
 - [Tvapi.Video](docs/Video.md)
 - [Tvapi.VideoNames](docs/VideoNames.md)
 - [Tvapi.VideoShowNames](docs/VideoShowNames.md)


## Documentation for Authorization


### Bearer

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

