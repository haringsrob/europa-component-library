import randomstring from "randomstring";
import oauth2 from "./oauth";

exports.handler = async () => {
  const authorizationUri = oauth2.authorizationCode.authorizeURL({
    scope: process.env.SCOPES || "repo",
    state: randomstring.generate(32),
  });

  return {
    statusCode: 302,
    headers: {
      Location: authorizationUri,
      "Cache-Control": "no-cache",
    },
    body: "redirecting to github ...",
  };
};
