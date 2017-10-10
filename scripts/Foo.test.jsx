import { mount, shallow } from 'enzyme';
import Foo from './Foo';
import React from 'react';

describe('enzyme test', () => {
  it('calls componentDidUpdate', () => {
    // 1. mount()
    // This DOES call componentDidUpdate after calling setState
    // const wrapper = mount(<Foo />);

    // 2. shallow(..., {lifecycleExperimental: true})
    // This DOES call componentDidUpdate after calling setState
    // const wrapper = shallow(<Foo />, { lifecycleExperimental: true });

    // 3. shallow()
    // This does NOT call componentDidUpdate after calling setState
    const wrapper = shallow(<Foo />);

    wrapper.setState({ toggled: true });
    expect(wrapper.state('componentDidUpdateWasCalled')).toBe(true);
  });
});
