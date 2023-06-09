import axios from 'axios';
import queryString from 'query-string';
// import URL from 'url';

/* ================== GOOGLE AUTHORIZATION ======================= */

exports.googleAuth = async (req, res) => {
  const stringifiedParams = queryString.stringify({
    client_id: process.env.GOOGLE_CLIENT_ID,
    redirect_uri: `${process.env.BASE_URL}/auth/google-redirect`,
    scope: [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
    ].join(' '),
    response_type: 'code',
    access_type: 'offline',
    prompt: 'consent',
  });
  return res.redirect(
    `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`
  );
};

exports.googleRedirect = async (req, res) => {
  const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  const urlObj = new URL(fullUrl);
  const urlParams = queryString.parse(urlObj.search);
  const code = urlParams.code;
  const tokenData = await axios({
    url: `https://oauth2.googleapis.com/token`,
    method: 'post',
    data: {
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: `${process.env.BASE_URL}/auth/google-redirect`,
      grant_type: 'authorization_code',
      code,
    },
  });
  const userData = await axios({
    url: 'https://www.googleapis.com/oauth2/v2/userinfo',
    method: 'get',
    headers: {
      Authorization: `Bearer ${tokenData.data.access_token}`,
    },
  });
  // console.log(userData.data);
  // userData.data.email
  // userData.data.accessToken
  // userData.data.refreshToken
  // userData.data.sid
  // ...
  // ...
  // ...
  return res.redirect(
    `${process.env.FRONTEND_URL}/google-redirect?email=${userData.data.email}`
  );
  // return res.redirect(
  //   `${process.env.FRONTEND_URL}/google-redirect?accessToken=${userData.data.accessToken}&refreshToken=${userData.data.refreshToken}&sid=${userData.data.sif}`
  // );
};
