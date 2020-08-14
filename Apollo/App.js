import React from "react";
import {gql} from "apollo-boost";
import { Query,useMutation } from "react-apollo";

const GET_CLASEES=gql`
    query{
        classes {
            classname
            id
            updated_at
            classimage {
              id
              width
              formats
              alternativeText
            }
          }
    }`

const App=()=>(
    <Query query={GET_CLASSES}>
        {({loading,error,data})=>{
            if (loading) return  <h1>Loading...</h1>
            if (error) return <h1>Something went wrong.</h1>
            return (<article>
                {data.map((classname,i)=>(                    
                                                                )
                }
                    )}
            </article>)
        }}        
    </Query>
)