import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import SourcesList from '../../src/js/components/SourcesList.jsx';
import mockedSources from '../../__mocks__/mockSources.json';

describe('SourcesList Component test suite', () => {
  describe('When the `SourcesList` component renders', () => {
    // const items = ['Learn react', 'rest', 'go out'];

    it('should match its empty snapshot', () => {
      const tree = renderer.create(
        <SourcesList />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
