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
    NEWS: {
      INDEX: url('/news/'),
    },
    MESSAGES: {
      INDEX: url('/messages/'),
    },
    USERS: {
      INDEX: url('/users/'),
      FRIENDS: url('/users/friends/'),
      SEARCH: url('/users/search/'),
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
      LIST: url('/media/'),
      USER: url('/media/user/:userSlug/'),
      CREATE: url('/media/create/'),
      DETAIL: url('/media/detail/:mediaPk/'),
    },
    WHISPER: {
      INDEX: url('/whisper/'),
      LIST: url('/whisper/'),
      QUESTION_CREATE: url('/whisper/question/ask/'),
      QUESTION_UPDATE: url('/whisper/question/:questionSlug/'),
    },
    BLOGS: {
      INDEX: url('/blogs/'),
      LIST: url('/blogs/'),
      USER: url('/blogs/user/:userSlug/'),
      POST_CREATE: url('/blogs/create/'),
      POST_DETAIL: url('/blogs/detail/:postSlug/'),
      POST_UPDATE: url('/blogs/update/:postSlug/'),
    },
    CLUBS: {
      INDEX: url('/clubs/'),
    },
    NOTIFICATIONS: {
      INDEX: url('/notifications/'),
    },
  },

  NOT_FOUND: url('*'),
};

export default CLIENT_URLS;
