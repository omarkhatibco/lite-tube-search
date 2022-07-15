import { render } from '@testing-library/react';
import { Providers } from 'context';
import SingleChannelPage from 'pages/[id]';
import { singleResponse } from '__mocks__';

describe('Single Channel Page', () => {
  const { items } = singleResponse;
  const item = items[0];
  const { container } = render(
    <Providers>
      <SingleChannelPage {...item} />
    </Providers>,
  );
  it('should matches snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
