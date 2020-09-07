import React from 'react';
import LoadingComponent from '../LoadingComponent';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

const mockStore = configureStore();

describe('<LoadingComponent />', () => {
  const renderComponent = (store) => render(
    <Provider store={store}>
      <LoadingComponent />
    </Provider>
  );

  describe('when loading is true', () => {
    const store = mockStore({
      loading: true
    });

    it('show LoadingComponent', () => {
      const { getByTestId } = renderComponent(store);

      expect(getByTestId("loading-component")).toBeInTheDocument();
    });
  });

  describe('when loading is false', () => {
    const store = mockStore({
      loading: false
    });

    it('do not show LoadingComponent', () => {
      const { queryByTestId } = renderComponent(store);

      expect(queryByTestId("loading-component")).not.toBeInTheDocument();
    });
  });
});
