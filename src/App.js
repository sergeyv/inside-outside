import { useState } from 'react';
import './App.css';

const NUM = 50;
const ROWS = new Array(NUM).fill().map((_, idx) => idx);
const COLS = new Array(NUM).fill().map((_, idx) => idx);

function InsideCheckWidget({myNumber, selectedNumber}) {
  if (myNumber === selectedNumber) {
    return <span className='inside'>{myNumber}</span>;
  }
  return null;
}

function OutsideCheckWidget({myNumber, selectedNumber}) {
  return <span className='outside'>{myNumber}</span>;
}

function Cell({rowIdx, colIdx, num, variant}) {
  if (variant === 'inside') {
    return <td>
      {ROWS.map(idx => <InsideCheckWidget myNumber={idx} selectedNumber={num} />)}
    </td>;
  } else {
    return <td>
      {ROWS.map(idx => (idx === num) ? <OutsideCheckWidget myNumber={idx} selectedNumber={num} /> : null)}
    </td>;
  }
}

function Row({rowIdx, num, variant}) {
  return <tr>
    {COLS.map(colIdx => <Cell rowIdx={rowIdx} colIdx={colIdx} num={num} variant={variant} />)}
  </tr>;
}

function App() {
  const [num, setNum] = useState(0);
  const [variant, setVariant] = useState('inside');
  return (
    <div className="App">
      <header className="App-header">
        Inside-outside
        <button
          onClick={() => setNum(Math.floor(Math.random() * NUM))} 
        >Change</button>

        <strong>{num}</strong>
        <div>
          <select value={variant} onChange={e => setVariant(e.target.value)}>
            <option value='inside'>Inside</option>
            <option value='outside'>Outside</option>
          </select>
        </div>
      </header>

      <table><tbody>
        {ROWS.map(idx => <Row rowIdx={idx} num={num} variant={variant} />)}

      </tbody></table>
    </div>
  );
}

export default App;
