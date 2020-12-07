# Analytics Engine

Uses Apollo graphql and mongo as data source


## Instructions

- Install dependecies
```
  npm install
```

- Start sever
```
npm run start
```

- Add env parameters. Create an .env file and add the following
```
PORT= <port>
DATABASE_URL= <url>
DATABASE_NAME= <name>
```

## Schema 
Use schema to guide on how to make requests and the allowed data types 

```
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
```


## Query samples
```
  # Tes if server is up
  hello: String

  getClinicsAnalytics: [ClinicData]

  # Get clinic analytics
  getClinicAnalyticsById(id: String!): ClinicData

  # Get clinic analytics for a prticular clinic and time period
  getClinicAnalyticsByDuration(clinicIdentifier: String!, periodStart: String, periodEnd: String): ClinicData
```

## Mutation samples

```
  # Create clinic Analytic Record
  createClinicAnalytic(
    clinicName: String, clinicIdentifier: String, periodStart: String, periodEnd: String, footFall: Int, patientStatisfation: Float, revenue: Float, issues: [IssueInput], staff: [StaffInput] 
    ): ClinicData

  # Update Clinic Analytic record
  updateClinicAnalytic(
    id: String, periodStart: String, periodEnd: String, footFall: Int, patientStatisfation: Float, revenue: Float, issues: [IssueInput], staff: [StaffInput]
    ): ClinicData

```



