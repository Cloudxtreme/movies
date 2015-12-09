import React from 'react';
import App from '../../src/app/App';
import TestUtils from 'react-addons-test-utils';

describe('Components', () => {
  describe('App', () => {
    let component;
    beforeEach(() => {
      const shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(<App />);
      component = shallowRenderer.getRenderOutput();
    });
    it('should have a div as container', () => {
      assert.strictEqual(component.type, 'div');
    });
    it('should contain children', () => {
      assert.notTypeOf(TestUtils.isElementOfType(component.props.children), 'undefined');
    });
  });
});
