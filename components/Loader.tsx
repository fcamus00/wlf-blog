import React from 'react'

type LoaderProps = {
  show: boolean;
};

function Loader({ show }: LoaderProps): JSX.Element {
  return show ? (<div className="loader"></div>) : null;
}

export default Loader
