import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders correctly all components tree', () => {
  const component = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(component).toBeTruthy();
});
