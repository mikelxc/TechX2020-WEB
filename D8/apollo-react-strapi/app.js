import React from "react";
import { gql } from "apollo-boost";
import { Query, useMutation } from "react-apollo";
import ClassItem from "./ClassItem";
// import AddClasses from "./AddClasses";

const GET_CLASSES = gql`
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
`;

const App = () => (
  <div>
    <Query query={GET_CLASSES}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error : {error}</div>;
        return (
          <article className="classes">
            {data.classes.map((classInfo, i) => (
              <ClassItem key={i} {...classInfo} />
            ))}
          </article>
        );
      }}
    </Query>
    {/* <AddClasses /> */}
  </div>
);

export default App;
