import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user { _id
                   username
                   email
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;


// export const SAVE_LOT = gql`
//     mutation saveLot($lot: SavedEventInput!) {
//         saveLot(lot: $lot) {
//             username
//             email
//             lotCount
//             savedLots {
//                 lotId
//                 address 
//                 description
//                 link
//                 title
//             }
//         }
//     }
// `;

// export const SAVE_EVENT = gql`
//     mutaiton saveLot($event: SavedEventInput!) {
//         saveEvent(event) {
//             username
//             email
//             eventCount
//             savedEvents {
//                 eventId
//                 category
//                 description
//                 link
//                 title
//             }
            
//         }
//     }
// `;

// export const REMOVE_LOT = gql`
//     mutation removeLot($lot: String!) {
//         removeLot(lot: $lotId) {
//             username
//             email
//             lotCount
//             savedLots {
//                 address 
//                 description
//                 lotId
//                 link
//                 title
//             }
//         }
//     }
// `;

// export const REMOVE_EVENT = gql`
//     mutaiton removeLot($lot: String!) {
//         removeEvent(lot) {
//             username
//             email
//             eventCount
//             savedEvents {
//                 eventId
//                 category
//                 description
//                 link
//                 title
//             }
            
//         }
//     }
// `;