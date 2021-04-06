import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:3030/scoops', (req, res, cxt) => {
    return res(
      cxt.json([
        { name: 'Chocolate', imagePath: '/images/chocalate.png' },
        { name: 'Vanilla', imagePath: '/images/vanilla.png' },
      ])
    );
  }),
];
