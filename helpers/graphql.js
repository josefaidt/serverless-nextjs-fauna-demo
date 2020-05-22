import { GraphQLClient } from 'graphql-request'

export default new GraphQLClient('https://graphql.fauna.com/graphql', {
  headers: {
    Authorization: `Bearer ${process.env.JEDS_DB_TOKEN}`,
  },
})
