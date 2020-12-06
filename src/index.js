require('dotenv').config();

const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema')
const resolvers = require('./resolvers');

const MongoClient = require('mongodb').MongoClient;

const ClinicAnalytics = require('./datasources/clinicAnalytics.js');

// Intialize database
client = new MongoClient(process.env.DATABASE_URL + '/' +  process.env.DATABASE_NAME, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(function (err) {
	console.log("MONGOdb connected");
  clientDB = client.db(process.env.DATABASE_NAME); 
});


const server = new ApolloServer({ 
	typeDefs,
	resolvers,
	tracing: true,
});



server.listen().then(() => {
  console.log(`
    Analytics Engine is now running!
    Listening on port 4000
  `);
});