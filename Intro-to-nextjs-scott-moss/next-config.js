const nextEnv = require("next-env");
const dotEnv = require("dotenv-load");

dotEnvLoad();

const withNextEnv = nextEnv();

module.exports = withNextEnv();
