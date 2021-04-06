import { render, screen, fireEvent } from '@testing-library/react';
import SummaryForm from './SummaryForm';

describe('First testing', () => {
  test('Initial Conditionals', () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole('checkbox', {
      name: /terms and conditions/i,
    });
    //should checkbox is not checked
    expect(checkbox).not.toBeChecked();

    const confirmButton = screen.getByRole('button', {
      name: /confirm order/i,
    });
    expect(confirmButton).toBeDisabled();
  });

  test('Checkbox enable button on first click and disable on second click', () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole('checkbox', {
      name: /terms and conditions/i,
    });
    const confirmButton = screen.getByRole('button', {
      name: /confirm order/i,
    });

    //should checkbox true
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    //should button enable
    expect(confirmButton).toBeEnabled();

    // should checkbox false the button will be disable
    fireEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();
  });
});
