module.exports = {
  environment: process.env.NODE_ENV || "development",
  port: process.env.PORT || 8000,
  dbFile: process.env.DB_FILE || "db/dev.db",
  jwtConfig: {
    secret: "secret",
    expiresIn: 7200,
  },
};
