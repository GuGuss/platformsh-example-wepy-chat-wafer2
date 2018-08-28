const host = window.location.origin;

const config = {
  service: {
    host,
    loginUrl: `${host}/weapp/login`,
  }
};

export default config
