const CONF = {
    port: '5757',
    rootPathname: '',
    serverHost: '',

    // 微信小程序 App ID
    appId: '',

    // 微信小程序 App Secret
    appSecret: '',

    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: true,

    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
    mysql: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        db: 'cAuth',
        pass: '',
        char: 'utf8mb4'
    },

    cos: {
        /**
         * 地区简称
         * @查看 https://cloud.tencent.com/document/product/436/6224
         */
        region: 'ap-guangzhou',
        // Bucket 名称
        fileBucket: 'qcloudtest',
        // 文件夹
        uploadFolder: ''
    },

    // 腾讯云相关配置可以查看云 API 秘钥控制台：https://console.qcloud.com/capi
    tunnelServerUrl: 'https://tunnel.ws.qcloud.la',
    tunnelSignatureKey: '27fb7d1c161b7ca52d73cce0f1d833f9f5b5ec89',
    qcloudAppId: '你的腾讯云 AppID',
    qcloudSecretId: '你的腾讯云 SecretId',
    qcloudSecretKey: '你的腾讯云 SecretKey',

    // 微信登录态有效期
    wxLoginExpires: 7200,
    wxMessageToken: 'abcdefgh'
}

const platformsh = require("platformsh").config();

for (var i in platformsh.routes) {
  var route = platformsh.routes[i];
  if (route["original_url"] === "https://{default}/") {
    CONF.serverHost = i.replace("https://", "").replace(/\/$/, "");
  }
}

// CONF.appId = '';
// CONF.appSecret = '';
// CONF.qcloudAppId = '';
// CONF.qcloudSecretId = '';
// CONF.qcloudSecretKey = '';

CONF.port = platformsh.port;
CONF.mysql = {
        host: platformsh.relationships["database"][0]["host"],
        port: platformsh.relationships["database"][0]["port"],
        user: platformsh.relationships["database"][0]["username"],
        db: platformsh.relationships["database"][0]["path"],
        pass: platformsh.relationships["database"][0]["password"],
        char: 'utf8mb4'
};


module.exports = CONF

