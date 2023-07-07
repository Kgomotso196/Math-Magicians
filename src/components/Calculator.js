import React, { useState } from 'react';
import ButtonCarton from './ButtonCarton';
import Button from './Button';
import compute from '../logic/calculate';

const buttonLabels = [
  [{ id: 'AC' }, { id: '+/-' }, { id: '%' }, { id: '÷' }],
  [{ id: '7' }, { id: '8' }, { id: '9' }, { id: 'x' }],
  [{ id: '4' }, { id: '5' }, { id: '6' }, { id: '-' }],
  [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '+' }],
  [{ id: '0' }, { id: '.' }, { id: '=' }],
];

const Calculator = () => {
  const [obj, setObj] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const handleEvent = (btn) => setObj(compute(obj, btn));

  return (
    <div className="calculator">
      <div className="screen">
        <p>
          {obj?.total}
          {' '}
          {obj?.operation}
          {' '}
          {obj?.next}
        </p>
      </div>
      <ButtonCarton>
        {buttonLabels.flat().map((btn) => (
          <Button onClick={() => handleEvent(btn.id)} value={btn.id} key={btn.id} />
        ))}
      </ButtonCarton>
    </div>
  );
};

export default Calculator;
