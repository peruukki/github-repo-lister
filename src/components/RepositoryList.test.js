// @flow
import { mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';

import RepositoryList from './RepositoryList';
import Spinner from './Spinner';

const repositories = [1, 2].map(i =>
  ({ name: `repo${i}`, description: `description${i}`, link: `link${i}` })
);

it('renders without crashing', () => {
  ReactDOM.render(
    <RepositoryList isFetching={false} repositories={[]} />,
    document.createElement('div')
  );
});

it('renders only a spinner when fetching repositories', () => {
  const wrapper = mount(<RepositoryList isFetching={true} repositories={repositories} />);
  expect(wrapper.contains(<Spinner />)).toBe(true);
  expect(wrapper.find('.RepositoryList-table').length).toBe(0);
});
