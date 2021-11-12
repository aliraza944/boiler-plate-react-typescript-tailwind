import React,{useState} from 'react';

import './App.css';

function App() {
const [state, setstate] = useState<number>(0)

  return (
    <div className="App bg-gray-500">
      
        <p>
          {state}
        </p>
       
    </div>
  );
}

export default App;
