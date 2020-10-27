import gql from 'graphql-tag';

export const QUERY_ME = qgl`
    {
        me {
            _id
            username
            email
            saveBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`;