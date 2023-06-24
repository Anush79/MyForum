
import './App.css';

import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';
import Main from './components/MainSection';

function App() {
  return (
    <div className="App">
      <header>
       <h2>My Forum</h2> 
      </header>
   <main>
      <LeftSideBar/>
      <Main/>
      <RightSideBar/>
   </main>
     
    </div>
  );
}

export default App;
