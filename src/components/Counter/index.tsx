import { useState } from 'react';

import { Row, Value, TextBox, Button, AsyncButton } from 'components/Counter/styled';
import {
  decrement,
  increment,
  selectCount,
  incrementAsync,
  incrementIfOdd,
  incrementByAmount,
} from 'redux/counter/slice/counterSlice';
import { useAppSelector, useAppDispatch } from 'redux/hooks';

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <Row>
        <Button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          -
        </Button>
        <Value>{count}</Value>
        <Button aria-label="Increment value" onClick={() => dispatch(increment())}>
          +
        </Button>
      </Row>
      <Row>
        <TextBox
          value={incrementAmount}
          aria-label="Set increment amount"
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <Button onClick={() => dispatch(incrementByAmount(incrementValue))}>Add Amount</Button>
        <AsyncButton onClick={() => dispatch(incrementAsync(incrementValue))}>
          Add Async
        </AsyncButton>
        <Button onClick={() => dispatch(incrementIfOdd(incrementValue))}>Add If Odd</Button>
      </Row>
    </div>
  );
}
