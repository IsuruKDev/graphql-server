export const typeDefs = `#graphql
    type Game{
        id:ID!
        title:String
        genre:String
        platforms:[String]
        reviews:[Review!]
    }

    type Review{
        id:ID!
        rating:String
        comment:String
        game:Game!
    }

    type Query{
        games:[Game]
        game(id:ID!):Game
        reviews:[Review]
        review(id:ID!):Review
    }
`;