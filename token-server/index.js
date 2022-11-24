(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('agora-access-token'), require('dotenv')) :
  typeof define === 'function' && define.amd ? define(['agora-access-token', 'dotenv'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.agoraAccessToken, global.dotenv));
})(this, (function (agoraAccessToken, dotenv) { 'use strict';

  const env = dotenv.config({ path: "./.env" });

  /**
   * @param {dotenv.DotenvConfigOutput} env
   * @returns {void}
   */
  const main = (env) => {
    /** @type {string} */
    const appId = env.parsed["AGORA_APP_ID"];
    /** @type {string} */
    const appCertificate = env.parsed["AGORA_APP_CERT"];
    const channelName = "aijent934ytlnwejvf3lyt485tvhkfsk";
    const uid = 0;
    const role = agoraAccessToken.RtcRole.PUBLISHER;
    const expirationTimeInSeconds = 3600;
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;
    // Build token with uid
    const tokenA = agoraAccessToken.RtcTokenBuilder.buildTokenWithUid(
      appId,
      appCertificate,
      channelName,
      uid,
      role,
      privilegeExpiredTs
    );
    console.log("Token with integer number Uid: " + tokenA);
  };
  main(env);

}));
//# sourceMappingURL=index.js.map
