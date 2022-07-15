import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchForm } from 'components/forms';
import { ChannelListItem } from 'components/SearchPage';
import { response } from '__mocks__';

describe('SearchForm', () => {
  const onSubmit = jest.fn();
  const onReset = jest.fn();
  it('should Works', async () => {
    render(<SearchForm onSubmit={onSubmit} onReset={onReset} />);

    await userEvent.type(
      screen.getByPlaceholderText(/search channels.../i),
      'tech',
    );
    await userEvent.click(screen.getByTestId('submit'));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith('tech');
    });

    await userEvent.click(screen.getByTestId('clear-search'));

    await waitFor(() => {
      expect(onReset).toBeCalledTimes(1);
    });
  });
});

describe('ChannelListItem', () => {
  const { items } = response;
  const item = items[0];
  it('match SnapShot', async () => {
    const { container } = render(<ChannelListItem {...item} />);

    expect(container).toMatchSnapshot();
  });
});
