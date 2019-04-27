const passport = require("passport");

module.exports = (app) => {
  //send request to google
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google")); //handle user data from google
};
