const { gql } = require('apollo-server');

const typeDefs = gql`

	type Query {
		hello: String
		getClinicAnalyticsById(id: String!): ClinicData
		getClinicAnalyticsByDuration(clinicIdentifier: String!, periodStart: String, periodEnd: String): ClinicData
	} 

	type Mutation {
		createClinicAnalytic(clinicName: String, clinicIdentifier: String, periodStart: String, periodEnd: String, footFall: Int, patientStatisfation: Float, revenue: Float, issues: [IssueInput], staff: [StaffInput] ): ClinicData
		updateClinicAnalytic(id: String, periodStart: String, periodEnd: String, footFall: Int, patientStatisfation: Float, revenue: Float, issues: [IssueInput], staff: [StaffInput]): ClinicData

	}

	input ClinicAnalytic {
		clinicName: String
		clinicIdentifier: String! 
		periodStart: Int!
		periodEnd: Int!
		footFall: Int
		patientStatisfation: Float
		revenue: Float
		staff: [StaffInput]
		issues: [IssueInput]
	}

	type ClinicData {
		_id: ID!
		seq: String
		clinicName: String
		clinicIdentifier: String! 
		periodStart: Int!
		periodEnd: Int!
		footFall: Int
		patientStatisfation: Float
		revenue: Float
		staff: [Staff]
		issues: [Issue]
	}

	type Issue {
		identifier: String!
		name: String
		count: Int!
	}
	
	type Staff {
		identifier: String!
		name: String!
		efficiencyDelta: Float
		npsDelta: Float
		efficiency: Float
		reportedIssues: Int
	}

	input IssueInput {
		name: String
		count: Int!
	}
	
	input StaffInput {
		identifier: String!
		name: String!
		efficiencyDelta: Float
		npsDelta: Float
		efficiency: Float
		reportedIssues: Int
	}

`;

module.exports = typeDefs;