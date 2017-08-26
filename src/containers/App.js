import React, { Component } from 'react';
import Layout from './Layout';
import Counter from '../components/Counter';

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182
export default class App extends Component {
  render() {
    // throw new Error('tests')
    return (
      <Layout>
        sdfsdf sdf
        <Counter />
      </Layout>
    );
  }
}