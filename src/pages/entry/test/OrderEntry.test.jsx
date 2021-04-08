import {
  render,
  screen,
  waitFor,
} from '../../../test-utils/testing-library-utils';

import OrderEntry from '../OrderEntry';
import { rest } from 'msw';
import { server } from '../../../mocks/server';

test('handlers error for scoops and toppings routes', () => {
  server.resetHandlers(
    rest.get('http://localhost:3030/scoops', (req, res, ctx) =>
      res(ctx.status(500))
    ),
    rest.get('http://localhost:3030/toppings', (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  render(<OrderEntry />);

  waitFor(async () => {
    const alerts = await screen.findAllByText(
      'An unexpected error occurred. Please try again later.'
    );
    expect(alerts).toHaveLength(2);
  });
});
