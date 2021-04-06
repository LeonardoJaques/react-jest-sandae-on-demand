import { useState } from 'react';
import { Button, Form, OverlayTrigger, Popover } from 'react-bootstrap';

function SummaryForm() {
  const [tcChecked, setTcChecked] = useState(false);
  const onChange = (evt) => setTcChecked(evt.target.checked);

  const popover = (
    <Popover id="termsandconditions-popover">
      <Popover.Content>No ice cream will actually be delivered</Popover.Content>
    </Popover>
  );
  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: 'blue' }}> Terms and Conditions</span>
      </OverlayTrigger>
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
