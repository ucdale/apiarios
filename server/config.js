const config = {};

config.host = process.env.HOST || "https://apiarios.documents.azure.com:443/";
config.authKey =
  process.env.AUTH_KEY || "K40VAzamG2f2NASgyIXD2GGKdUd2LGZxGKvOGUab0sEgxVR7gkHimB9MJI3XC6ykMHus3tcAzCLS2ST3YHZzzQ==";
config.databaseId = "Apiarios";
config.containerId = "Items";

if (config.host.includes("https://localhost:")) {
  console.log("Local environment detected");
  console.log("WARNING: Disabled checking of self-signed certs. Do not have this code in production.");
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  console.log(`Go to http://localhost:${process.env.PORT || '8080'} to try the sample.`);
}

module.exports = config;