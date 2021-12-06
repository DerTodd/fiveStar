const { gql } = require("apollo-server-express");

const typeDefs = gql`
 
type User{
    _id: ID!
    name:String!
    email:String!
    password:String!
    bio:String
    date_joined:String
}
type Drink{
    _id:ID!
    venue:[Venue]!
    drinkName:String!
    recommendationCount:Int
    date:String
}
type Recommend{
    _id:ID!
    venue_id:Venue!
    votes:[User]!
}
type Venue{
    _id: ID!
    location_name: String!
    address: [String]!
    up_votes: Int
    drink_names: [String]
    user_drinks:[String]
}

type Auth {
    token: ID!
    user: User
}

type Query{
    me: User
    venues:[Venue]!
    drinks:[Drink]!
    recommends:[Recommend]!
    users:[User]!
    user(userid: ID!):User
    venue(venueid: ID!):Venue
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): Auth
}


`;

module.exports = typeDefs;
