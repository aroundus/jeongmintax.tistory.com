interface Config {
  JOIN_URL: string;
  LOGIN_URL: string;
  LOGOUT_URL: string;
  TOP_SSL_URL: string;
}

const INITIAL_CONFIG: Config = {
  JOIN_URL: '',
  LOGIN_URL: '',
  LOGOUT_URL: '',
  TOP_SSL_URL: '',
};

export function getConfig() {
  const config = INITIAL_CONFIG;

  if (window.T && window.appInfo) {
    config.JOIN_URL = window.T.config.JOIN_URL;
    config.LOGIN_URL = window.T.config.LOGIN_URL;
    config.LOGOUT_URL = window.appInfo.logoutUrl;
    config.TOP_SSL_URL = window.T.config.TOP_SSL_URL;
  }

  return config;
}
