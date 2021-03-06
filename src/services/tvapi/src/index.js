/**
 * tvapi
 * The TV Backend api v3.0
 *
 * OpenAPI spec version: 3.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import Category from './model/Category';
import Collect from './model/Collect';
import CommonResponse from './model/CommonResponse';
import Error from './model/Error';
import Event from './model/Event';
import EventDetail from './model/EventDetail';
import EventExtraParameterDetail from './model/EventExtraParameterDetail';
import Font from './model/Font';
import FreeSeries from './model/FreeSeries';
import Game from './model/Game';
import History from './model/History';
import InlineResponse200 from './model/InlineResponse200';
import InlineResponse2001 from './model/InlineResponse2001';
import InlineResponse2002 from './model/InlineResponse2002';
import InlineResponse2003 from './model/InlineResponse2003';
import InlineResponse2004 from './model/InlineResponse2004';
import InlineResponse2005 from './model/InlineResponse2005';
import InlineResponse2006 from './model/InlineResponse2006';
import Leaderboard from './model/Leaderboard';
import Login from './model/Login';
import Movie from './model/Movie';
import Page from './model/Page';
import PageCell from './model/PageCell';
import PageCellSpecialIcon from './model/PageCellSpecialIcon';
import PageContent from './model/PageContent';
import PageSection from './model/PageSection';
import Recommend from './model/Recommend';
import Release from './model/Release';
import SearchRecommend from './model/SearchRecommend';
import Series from './model/Series';
import Subject from './model/Subject';
import SubjectSeries from './model/SubjectSeries';
import Template from './model/Template';
import TemplateCell from './model/TemplateCell';
import TemplateContent from './model/TemplateContent';
import User from './model/User';
import Video from './model/Video';
import VideoNames from './model/VideoNames';
import VideoShowNames from './model/VideoShowNames';
import AuthApi from './api/AuthApi';
import CategorysApi from './api/CategorysApi';
import CollectsApi from './api/CollectsApi';
import EventsApi from './api/EventsApi';
import FreeSeriesApi from './api/FreeSeriesApi';
import GamesApi from './api/GamesApi';
import HistorysApi from './api/HistorysApi';
import ImagesApi from './api/ImagesApi';
import LeaderboardsApi from './api/LeaderboardsApi';
import MoviesApi from './api/MoviesApi';
import PagesApi from './api/PagesApi';
import PlayHistorysApi from './api/PlayHistorysApi';
import ProfileApi from './api/ProfileApi';
import RecommendsApi from './api/RecommendsApi';
import ReleasesApi from './api/ReleasesApi';
import SearchRecommendsApi from './api/SearchRecommendsApi';
import SeriesApi from './api/SeriesApi';
import SubjectSeriesApi from './api/SubjectSeriesApi';
import SubjectsApi from './api/SubjectsApi';
import TemplatesApi from './api/TemplatesApi';
import UsersApi from './api/UsersApi';
import VideosApi from './api/VideosApi';


/**
* The_TV_Backend_api_v3_0.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var Tvapi = require('index'); // See note below*.
* var xxxSvc = new Tvapi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new Tvapi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new Tvapi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Tvapi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 3.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Category model constructor.
     * @property {module:model/Category}
     */
    Category,

    /**
     * The Collect model constructor.
     * @property {module:model/Collect}
     */
    Collect,

    /**
     * The CommonResponse model constructor.
     * @property {module:model/CommonResponse}
     */
    CommonResponse,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The Event model constructor.
     * @property {module:model/Event}
     */
    Event,

    /**
     * The EventDetail model constructor.
     * @property {module:model/EventDetail}
     */
    EventDetail,

    /**
     * The EventExtraParameterDetail model constructor.
     * @property {module:model/EventExtraParameterDetail}
     */
    EventExtraParameterDetail,

    /**
     * The Font model constructor.
     * @property {module:model/Font}
     */
    Font,

    /**
     * The FreeSeries model constructor.
     * @property {module:model/FreeSeries}
     */
    FreeSeries,

    /**
     * The Game model constructor.
     * @property {module:model/Game}
     */
    Game,

    /**
     * The History model constructor.
     * @property {module:model/History}
     */
    History,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001,

    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002,

    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003,

    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004,

    /**
     * The InlineResponse2005 model constructor.
     * @property {module:model/InlineResponse2005}
     */
    InlineResponse2005,

    /**
     * The InlineResponse2006 model constructor.
     * @property {module:model/InlineResponse2006}
     */
    InlineResponse2006,

    /**
     * The Leaderboard model constructor.
     * @property {module:model/Leaderboard}
     */
    Leaderboard,

    /**
     * The Login model constructor.
     * @property {module:model/Login}
     */
    Login,

    /**
     * The Movie model constructor.
     * @property {module:model/Movie}
     */
    Movie,

    /**
     * The Page model constructor.
     * @property {module:model/Page}
     */
    Page,

    /**
     * The PageCell model constructor.
     * @property {module:model/PageCell}
     */
    PageCell,

    /**
     * The PageCellSpecialIcon model constructor.
     * @property {module:model/PageCellSpecialIcon}
     */
    PageCellSpecialIcon,

    /**
     * The PageContent model constructor.
     * @property {module:model/PageContent}
     */
    PageContent,

    /**
     * The PageSection model constructor.
     * @property {module:model/PageSection}
     */
    PageSection,

    /**
     * The Recommend model constructor.
     * @property {module:model/Recommend}
     */
    Recommend,

    /**
     * The Release model constructor.
     * @property {module:model/Release}
     */
    Release,

    /**
     * The SearchRecommend model constructor.
     * @property {module:model/SearchRecommend}
     */
    SearchRecommend,

    /**
     * The Series model constructor.
     * @property {module:model/Series}
     */
    Series,

    /**
     * The Subject model constructor.
     * @property {module:model/Subject}
     */
    Subject,

    /**
     * The SubjectSeries model constructor.
     * @property {module:model/SubjectSeries}
     */
    SubjectSeries,

    /**
     * The Template model constructor.
     * @property {module:model/Template}
     */
    Template,

    /**
     * The TemplateCell model constructor.
     * @property {module:model/TemplateCell}
     */
    TemplateCell,

    /**
     * The TemplateContent model constructor.
     * @property {module:model/TemplateContent}
     */
    TemplateContent,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
     * The Video model constructor.
     * @property {module:model/Video}
     */
    Video,

    /**
     * The VideoNames model constructor.
     * @property {module:model/VideoNames}
     */
    VideoNames,

    /**
     * The VideoShowNames model constructor.
     * @property {module:model/VideoShowNames}
     */
    VideoShowNames,

    /**
    * The AuthApi service constructor.
    * @property {module:api/AuthApi}
    */
    AuthApi,

    /**
    * The CategorysApi service constructor.
    * @property {module:api/CategorysApi}
    */
    CategorysApi,

    /**
    * The CollectsApi service constructor.
    * @property {module:api/CollectsApi}
    */
    CollectsApi,

    /**
    * The EventsApi service constructor.
    * @property {module:api/EventsApi}
    */
    EventsApi,

    /**
    * The FreeSeriesApi service constructor.
    * @property {module:api/FreeSeriesApi}
    */
    FreeSeriesApi,

    /**
    * The GamesApi service constructor.
    * @property {module:api/GamesApi}
    */
    GamesApi,

    /**
    * The HistorysApi service constructor.
    * @property {module:api/HistorysApi}
    */
    HistorysApi,

    /**
    * The ImagesApi service constructor.
    * @property {module:api/ImagesApi}
    */
    ImagesApi,

    /**
    * The LeaderboardsApi service constructor.
    * @property {module:api/LeaderboardsApi}
    */
    LeaderboardsApi,

    /**
    * The MoviesApi service constructor.
    * @property {module:api/MoviesApi}
    */
    MoviesApi,

    /**
    * The PagesApi service constructor.
    * @property {module:api/PagesApi}
    */
    PagesApi,

    /**
    * The PlayHistorysApi service constructor.
    * @property {module:api/PlayHistorysApi}
    */
    PlayHistorysApi,

    /**
    * The ProfileApi service constructor.
    * @property {module:api/ProfileApi}
    */
    ProfileApi,

    /**
    * The RecommendsApi service constructor.
    * @property {module:api/RecommendsApi}
    */
    RecommendsApi,

    /**
    * The ReleasesApi service constructor.
    * @property {module:api/ReleasesApi}
    */
    ReleasesApi,

    /**
    * The SearchRecommendsApi service constructor.
    * @property {module:api/SearchRecommendsApi}
    */
    SearchRecommendsApi,

    /**
    * The SeriesApi service constructor.
    * @property {module:api/SeriesApi}
    */
    SeriesApi,

    /**
    * The SubjectSeriesApi service constructor.
    * @property {module:api/SubjectSeriesApi}
    */
    SubjectSeriesApi,

    /**
    * The SubjectsApi service constructor.
    * @property {module:api/SubjectsApi}
    */
    SubjectsApi,

    /**
    * The TemplatesApi service constructor.
    * @property {module:api/TemplatesApi}
    */
    TemplatesApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi,

    /**
    * The VideosApi service constructor.
    * @property {module:api/VideosApi}
    */
    VideosApi
};
