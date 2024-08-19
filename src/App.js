import ComponentWrapper from './components/ComponentWrapper';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Affiliates from './pages/Affiliates'
import Developers from './pages/Developers'
import Contact from './pages/Contact'
import About from './pages/About'
import Privacy from './pages/Privacy'
import GameContent from './pages/GameContent'

function App() {
  return (
    <>
      <ComponentWrapper>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/affiliates' element={<Affiliates/>} />
        <Route path='/developers' element={<Developers/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/privacy' element={<Privacy/>} />
        <Route path='/game/:id' element={<GameContent/>} />
      </Routes>
      </ComponentWrapper>
    </>
  );
}

export default App;
