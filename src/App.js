
import './App.css';
import {Routes, Route} from 'react-router-dom'

import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';
import Main from './components/MainSection';
import Post from './components/Post';
function App() {
  return (
    <div className="App">
      <header>
       <h2>My Forum</h2> 
      </header>
   <main>
      <LeftSideBar/>
<Routes>
  <Route path="/" element={<Main/>}></Route>
  <Route path="/post/:id" element={<Post/>}></Route>
</Routes>
      
      <RightSideBar/>
     


   </main>
     
    </div>
  );
}

export default App;
