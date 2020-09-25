import React from 'react';
import logo from './logo.svg';
import './App.css';
import Diary from './components/diary/Diary';
import Data from './components/diary/Data';
import DiaryContext from './context/DiaryContext';
import DataContext from './context/DataContext';
import Data1 from './components/diary/Data1';
import Data2 from './components/diary/Data2';


function App() {
  return (
    <div className="App">
      
      <DiaryContext>
          <Diary />
          <Data />
      </DiaryContext>

      <DataContext>
        <Data1 />
        <Data2 />
      </DataContext>
        
    </div>
  );
}

export default App;
