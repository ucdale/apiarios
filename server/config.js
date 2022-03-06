const config = {};

// prod
config.host = "https://apiarios.documents.azure.com:443/";
config.authKey = "K40VAzamG2f2NASgyIXD2GGKdUd2LGZxGKvOGUab0sEgxVR7gkHimB9MJI3XC6ykMHus3tcAzCLS2ST3YHZzzQ==";
config.databaseId = "Apiarios";
config.containerId = "Apiari";

// locale
// config.endpoint = 'https://localhost:8081'
// config.key = 'C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw=='
// config.databaseId = "Apiarios";
// config.containerId = "Apiari";


config.database = {
  id: 'apiarios'
}

config.container = {
  id: 'apiari'
}

config.items = {
  IsolaAugusta: {
    id: 'IsolaAgusta.1',
    zona: 'Palazzolo',
    casette: [
      {
        numero: '1',
        colore: 'blu',
        stato: [
          {
            data: '21/04/2021',
            isReginaTrovata: true,
            isCovataFresca: true,
            melari:[
              {primo: "un po"},
              {secondo: "pieno"},
              {terzo: "vuoto"}
            ]
          }
        ]
      },
      {
        numero: '2',
        colore: 'rossa',
        stato: [
          {
            data: '21/04/2021',
            isReginaTrovata: true,
            isCovataFresca: true,
            melari:[
              {primo: "vuoto"},
              {secondo: "pieno"},
              {terzo: "vuoto"}
            ]
          }
        ]
      }
    ],
  },
  Gorgo: {
    id: 'Gorgo.1',
    zona: 'Gorgo',
    casette: [
      {
        numero: '1',
        colore: 'blu',
        stato: [
          {
            data: '21/04/2021',
            isReginaTrovata: true,
            isCovataFresca: true,
            melari:[
              {primo: "pieno"},
              {secondo: "pieno"},
              {terzo: "meta"}
            ]
          }
        ]
      }
    ],
  },
}

// if (config.host.includes("https://localhost:")) {
//   console.log("Local environment detected");
//   console.log("WARNING: Disabled checking of self-signed certs. Do not have this code in production.");
//   process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
//   console.log(`Go to http://localhost:${process.env.PORT || '8080'} to try the sample.`);
// }

module.exports = config;