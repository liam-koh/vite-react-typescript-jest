import { useState } from 'react'
import './App.css';
import { RadioButton } from '@o2pluss/o2pluss-design-system';
import VoiceRecord from './components/VoiceRecord';
import SkeletonUI from './components/SkeletonUI';

const MockComponent = () => {
  const [name, setName] = useState<string>('');

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
      <p>음성녹음</p>
      <VoiceRecord />
      <SkeletonUI/>
    </div>
  );
};

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
 * rebase commit 3
 * 
 * clear
 */
function App() {
  return (
    <MockComponent/>
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