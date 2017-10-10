import PropTypes from 'prop-types';
import React from 'react';

export class Foo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
      componentDidUpdateWasCalled: false
    };
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');

    if (this.state.toggled !== prevState.toggled) {
      this.setState({ componentDidUpdateWasCalled: true });
    }
  }

  render() {
    return (
      <div>Hello world</div>
    );
  }
}

export default Foo;
