import React from "react";
import { gql } from "apollo-boost";
import { Query, useMutation } from "react-apollo";
import className from "./className";

const GET_CLASSES = gql`
    query {
        classes {
            id
            classname
            ranking
            classimg {
                url
            }
        }
    }
`;

const App = () => (
    <Query query = {GET_CLASSES}>
        {({loading, error, data}) => {
            if (loading) return <h1>loading...</h1>;
            if (error) return <h1>error</h1>;
            return (<article>
                {data.classes.map((className, i) => (
                    <className key={i}>{className}</className>
                ))}
            </article>);
        }}
    </Query>
);

export default App;