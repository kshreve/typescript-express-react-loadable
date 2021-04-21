import React from "react";
import Loadable, { LoadingComponentProps } from "react-loadable";

const Loading = ({
  error,
  retry,
  pastDelay,
  timedOut,
}: LoadingComponentProps) => {
  let element = null;

  if (error) {
    element = (
      <div>
        Error! <button onClick={retry}>Retry</button>
      </div>
    );
  } else if (timedOut) {
    element = (
      <div>
        Taking a long time... <button onClick={retry}>Retry</button>
      </div>
    );
  } else if (pastDelay) {
    element = <div>Loading...</div>;
  }

  return element;
};

export default (loader: any) =>
  Loadable({
    loader,
    loading: Loading,
  });
