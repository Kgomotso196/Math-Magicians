import ButtonCarton from './ButtonCarton';
import Button from './Button';

const buttonLabels = [
  [{ id: 'clear', label: 'C' }, { id: 'negate', label: '+/-' }, { id: 'percent', label: '%' }, { id: 'divide', label: '÷' }],
  [{ id: '7', label: '7' }, { id: '8', label: '8' }, { id: '9', label: '9' }, { id: 'multiply', label: 'x' }],
  [{ id: '4', label: '4' }, { id: '5', label: '5' }, { id: '6', label: '6' }, { id: 'subtract', label: '-' }],
  [{ id: '1', label: '1' }, { id: '2', label: '2' }, { id: '3', label: '3' }, { id: 'add', label: '+' }],
  [{ id: '0', label: '0' }, { id: '.', label: '.' }, { id: 'equals', label: '=' }],
];

const Calculator = () => (
  <div className="calculator">
    <div className="screen">0</div>
    <ButtonCarton>
      {buttonLabels.flat().map((btn) => (
        <Button value={btn.label} key={btn.id} />
      ))}
    </ButtonCarton>
  </div>
);

export default Calculator;
