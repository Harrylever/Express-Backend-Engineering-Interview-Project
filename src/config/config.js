const portV = process.env.PORT || 3000;
const mongoUri = process.env.MONGO_URI;

module.exports = {
  mongoUri,
  portV,
};
