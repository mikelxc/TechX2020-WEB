import React from "react";

/**
 * A React component that renders the semantic HTML progress indicator.
 * @exports JSX.Element
 */
export const Loading = () => (
  <>
    <label htmlFor="loadingStatus">Loading...</label>
    <progress id="loadingStatus" />
  </>
);

