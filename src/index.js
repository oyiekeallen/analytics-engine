require('dotenv').config();

const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema')
const resolvers = require('./resolvers');

const MongoClient = require('mongodb').MongoClient;

// Intialize database
client = new MongoClient(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(function (err) {
	console.log("MONGOdb connected and authenticated ");

	clientDB= client.db(process.env.DATABASE_NAME || "access_afya_asnalytics"); 
});


const server = new ApolloServer({ 
	typeDefs,
	resolvers,
	tracing: true,
});



server.listen(process.env.PORT).then(() => {
  console.log(`
    Analytics Engine is now running!
    Listening on port 
  `);
});