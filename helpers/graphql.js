import { GraphQLClient } from 'graphql-request'

// export instance of GraphQL Client for Fauna queries
export default new GraphQLClient('https://graphql.fauna.com/graphql', {
  headers: {
    Authorization: `Bearer ${process.env.JEDS_DB_TOKEN}`,
  },
})
