const {buildSchema} = require('graphql');

module.exports = buildSchema(`
type Event{
    _id: ID!
    title: String!
    description: String!
    price: Float!
    date: String!
    creator: User!
}

type User{
    _id: ID!
    email: String!
    password: String
    createdEvents: [Event!]
}

input EventInput {
    title: String!
    description: String!
    price: Float!
    date: String!
    creator: String!
}

input UserInput{
    email: String!
    password: String!
}

type Queries{
    getEvents: [Event!]!
}

type Mutations{
    createEvent(eventInput: EventInput): Event
    createUser(userInput: UserInput): User
}

schema {
    query: Queries
    mutation: Mutations 
}
`)