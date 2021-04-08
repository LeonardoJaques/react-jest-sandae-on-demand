import { render, screen } from '../../../test-utils/testing-library-utils';
import Options from '../Options';

test('Displays image for each scoops option from server', async () => {
  render(<Options optionType="scoops" />);

  // find images
  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confir alt text of images
  // @ts-ignore
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('Displays image for each toppings option from server', async () => {
  render(<Options optionType="toppings" />);

  // find images
  const toppingsImage = await screen.findAllByRole('img', {
    name: /topping$/i,
  });
  expect(toppingsImage).toHaveLength(3);

  // confir alt text of images
  // @ts-ignore
  const altText = toppingsImage.map((element) => element.alt);
  expect(altText).toEqual([
    'Cherries topping',
    'M&Ms topping',
    'Hot fudge topping',
  ]);
});
