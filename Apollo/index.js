import react from "react";
import {render} from "react-dom";
import ApolloClient,{} from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import App from "./App";

const client =new ApolloClient({uri:'http://localhost:1337/graphql'})
const ApolloApp=(AppComponent)=>(
    <ApolloProvider client={client}>
        <AppComponent />
    </ApolloProvider>
);

render(AppoloApp(App),doocument.getElementById('root'));