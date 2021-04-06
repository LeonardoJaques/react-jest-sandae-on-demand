import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function SummaryForm() {
  const [tcChecked, setTcChecked] = useState(false);
  const onChange = (evt) => setTcChecked(evt.target.checked);
  const checkboxLabel = (
    <span>
      I agree to <span style={{ color: 'blue' }}>Terms and Conditions</span>
    </span>
  );
  return (
    <Form>
      <Form.Group>
        <Form.Check
          type="checkbox"
          id="disabledFieldsetCheck"
          label={checkboxLabel}
          onChange={onChange}
        />
      </Form.Group>
      <Button disabled={!tcChecked} variant="primary" type="submit">
        Confirm order
      </Button>
    </Form>
  );
}

export default SummaryForm;
