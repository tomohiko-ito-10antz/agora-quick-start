import {
  RtcTokenBuilder,
  RtmTokenBuilder,
  RtcRole,
  RtmRole,
} from "agora-access-token";

import dotenv from "dotenv";
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
  const role = RtcRole.PUBLISHER;
  const expirationTimeInSeconds = 3600;
  const currentTimestamp = Math.floor(Date.now() / 1000);
  const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;
  // Build token with uid
  const tokenA = RtcTokenBuilder.buildTokenWithUid(
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
