import React from "react";
import { useMutation } from "react-apollo";
import { gql } from "apollo-boost";

const ADD_CLASSES = gql`
  mutation AddClasses($ClassName: createClassInput) {
    createClass(input: $ClassName) {
      class {
        ClassName
      }
    }
  }
`;

export default function AddClasses() {
  let input = {};
  const [addClasses, { data }] = useMutation(ADD_CLASSES);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addClasses({ data: { ClassName: input.value } });
          input.value = "";
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">Add Classes</button>
      </form>
      <h5>{input.value}</h5>
    </div>
  );
}
