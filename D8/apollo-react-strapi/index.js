import React from "react";
import { render } from "react-dom";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import App from "./app";

const client = new ApolloClient({ uri: "http://localhost:1337/graphql" });

client
  .query({
    query: gql`
      query {
        classes {
          StartTime
          EndTime
          ClassName
          ClassImg {
            url
          }
        }
      }
    `,
  })
  .then((result) => console.log(result));

const ApolloApp = (AppComponent) => (
  <ApolloProvider client={client}>
    <AppComponent />
  </ApolloProvider>
);

render(ApolloApp(App), document.getElementById("root"));
