import React from "react";
import {render} from "react-dom";
import ApolloClient, { gql } from "apollo-boost";
import {ApolloProvider} from "react-apollo";

const client = new ApolloClient({uri: "http://localhost:1337/graphql"});
const ApolloApp = (AppComponent) => (
    <ApolloProvider client={client}>
        <AppComponent/>
    </ApolloProvider>
)
client.query({
    query: gql`
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
    `
})
.then((results) => console.log(results));
function App(){
    <h1>See console for results</h1>;
};
render(ApolloApp(App), document.getElementById("root"));