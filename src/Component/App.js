import Header from './Header.js'
import Home from './Home.js'
import Magma from './MagmaRock.js'
import {Routes, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/magma" element={<Magma />} />
      </Routes>
    </div>
  );
}

export default App;
