import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import pngSample from './assets/excel.png';
import './App.css';
import { Button, RadioButton } from '@o2pluss/o2pluss-design-system';

/**
 * commit1
 * commit2
 * commit3
 * 
 * commit4
 * commit5
 * commit6
 * 
 * rebase commit 1
 * rebase commit 2
 */
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={pngSample} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button size="xs">아앙</Button>
      <RadioButtonGroup/>
    </>
  )
}

export default App


/**
 * radio button group 예제
 * @returns
 */
export const RadioButtonGroup = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleRadioButtonChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div className="w-full flex flex-col">
      <h3 className="text-black">value: {selectedValue}</h3>
      <div className="w-full flex justify-start gap-3">
        <RadioButton
          id="option1"
          checked={selectedValue === 'option1'}
          onChange={() => handleRadioButtonChange('option1')}
          label="Option 1"
        />
        <RadioButton
          id="option2"
          checked={selectedValue === 'option2'}
          onChange={() => handleRadioButtonChange('option2')}
          label="Option 2"
        />
        <RadioButton
          id="option3"
          checked={selectedValue === 'option3'}
          onChange={() => handleRadioButtonChange('option3')}
          label="Option 3"
        />
      </div>
    </div>
  );
};