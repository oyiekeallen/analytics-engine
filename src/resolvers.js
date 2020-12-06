var ObjectId = require('mongodb').ObjectID;

const resolvers =  {
	Query: {
    hello: () => {
      return `hey sup ? `;
    },
		getClinicAnalyticsById: async(parent, args, context, info) => {
			result = await clientDB.collection('counters').find(ObjectId(args.id)).toArray().then(result => { return result.shift()})
			return result
		},
		getClinicAnalyticsByDuration: async(parent, args, context, info) => {

			var periodStart = Date.parse(args.periodStart);
			var periodEnd = Date.parse(args.periodEnd);

			result = await clientDB.collection('counters').find( { clinicIdentifier: clinicIdentifier, periodStart: { $eq: periodStart }, periodEnd: {$eq: periodEnd}} )
														 .toArray().then(result => { return result.shift() })
			return result
		},
	},
	Mutation: {
		createClinicAnalytic: async (_, { clinicName, clinicIdentifier, periodStart, periodEnd, footFall, patientStatisfation, revenue, staff, issues, } , { dataSources }) => {
			
			var periodStart = Date.parse(periodStart);
			var periodEnd = Date.parse(periodEnd);

			result = await clientDB.collection('counters').insert({
																											clinicName: clinicName, clinicIdentifier: clinicIdentifier, 
																											periodStart: periodStart, periodEnd: periodEnd, footFall: footFall, 
																											patientSatisfaction: patientStatisfation, revenue: revenue, staff: staff, issues: issues
																										})
			
			return result.ops.shift()

		},
		updateClinicAnalytic: async (_, { id, clinicName, clinicIdentifier, periodStart, periodEnd, footFall, patientStatisfation, revenue, staff, issues, } , { dataSources }) => {
			var periodStart = Date.parse(periodStart);
			var periodEnd = Date.parse(periodEnd);

			result = await clientDB.collection('counters').updateOne(
																											{_id: ObjectId(id)}, 
																											{
																												$set: 
																												{
																													clinicName: clinicName, clinicIdentifier: clinicIdentifier, 
																													periodStart: periodStart, periodEnd: periodEnd, footFall: footFall, 
																													patientSatisfaction: patientStatisfation, revenue: revenue
																												}
																											})
			
			return result.ops.shift()

		},
	}
 }

module.exports = resolvers