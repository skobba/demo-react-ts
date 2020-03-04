import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';

export const App: FunctionComponent = (): JSX.Element => (
  <h1>React with latest (esnext) Typescript!</h1>
);

ReactDOM.render(<App />, document.getElementById('root'));
