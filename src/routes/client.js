import url from 'utils/routes';

const CLIENT_URLS = {
  INDEX: url('/'),
  AUTH: {
    INDEX: url('/auth/'),
    SIGN_IN: url('/auth/sign-in/'),
    SIGN_OUT: url('/auth/sign-out/'),
    SIGN_UP: url('/auth/sign-up/'),
    SIGN_UP_VERIFY: url('/auth/sign-up/verify/:key/'),
    RESET_PASSWORD: url('/auth/reset-password/'),
    RESET_PASSWORD_CONFIRM: url('/auth/reset-password/confirm/:uid/:token/'),
  },
  DASHBOARD: {
    INDEX: url('/'),
    PROFILE: {
      INDEX: url('/profile/:userSlug/'),
    },
    ACTIONS: {
      INDEX: url('/actions/'),
    },
    CHATS: {
      INDEX: url('/chats/'),
      LIST: url('/chats/all/'),
      GROUPS: url('/chats/groups/'),
      CONVERSATIONS: url('/chats/conversation/'),
      DETAIL: url('/chats/:chatSlug/'),
    },
    USERS: {
      INDEX: url('/users/'),
      FRIENDS: url('/users/friends/'),
      SEARCH: url('/users/search/'),
      REQUESTS_FROM_ME: url('/users/requests/from/me/'),
      REQUESTS_FROM_USERS: url('/users/requests/from/users/'),
    },
    EVENTS: {
      INDEX: url('/events/'),
      CALENDAR: url('/events/'),
      CREATE: url('/events/create/'),
    },
    SETTINGS: {
      INDEX: url('/settings/'),
    },
    SEARCH: {
      INDEX: url('/search/'),
    },
    MEDIA: {
      INDEX: url('/media/'),
      LIST: url('/media/all/'),
      CREATE: url('/media/create/'),
      DETAIL: url('/media/detail/:mediaSlug/'),
      FOLDERS: url('/media/folders/'),
      FOLDER_DETAIL: url('/media/folders/:folderSlug/'),
    },
    WHISPER: {
      INDEX: url('/whisper/'),
      LIST: url('/whisper/'),
      QUESTION_CREATE: url('/whisper/question/ask/'),
      QUESTION_UPDATE: url('/whisper/question/:questionSlug/'),
    },
    BLOGS: {
      INDEX: url('/blogs/'),
      LIST: url('/blogs/all/'),
      USER: url('/blogs/user/:userSlug/'),
      POST_CREATE: url('/blogs/create/'),
      POST_DETAIL: url('/blogs/detail/:postSlug/'),
      POST_UPDATE: url('/blogs/update/:postSlug/'),
    },
    THEMAPEDIA: {
      INDEX: url('/themapedia/'),
      LIST: url('/themapedia/'),
      USER: url('/themapedia/user/:userSlug/'),
      POST_CREATE: url('/themapedia/create/'),
      POST_DETAIL: url('/themapedia/detail/:postSlug/'),
      POST_UPDATE: url('/themapedia/update/:postSlug/'),
    },
    CLUBS: {
      INDEX: url('/clubs/'),
      MAP: url('/clubs/map/'),
      MY: url('/clubs/my/'),
    },
    NOTIFICATIONS: {
      INDEX: url('/notifications/'),
    },
    ADMINISTRATION: {
      INDEX: url('/admin/'),
    },
  },

  NOT_FOUND: url('*'),
};

export default CLIENT_URLS;
