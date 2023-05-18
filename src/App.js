import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Que1 from './components/molecules/Questin pages/Que1';
import Que2 from './components/molecules/Questin pages/Que2';
import Que3 from './components/molecules/Questin pages/Que3';
import Que4 from './components/molecules/Questin pages/Que4';
import Que5 from './components/molecules/Questin pages/Que5';
import Que6 from './components/molecules/Questin pages/Que6';
import Que7 from './components/molecules/Questin pages/Que7';
import Que8 from './components/molecules/Questin pages/Que8';
import Que9 from './components/molecules/Questin pages/Que9';
import Que10 from './components/molecules/Questin pages/Que10';
import Home from './components/atoms/home page/Home';
import Submit from './components/atoms/Submit page/Submit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/que1' element= {<Que1 />} />
        <Route path='/que2' element= {<Que2 />} />
        <Route path='/que3' element= {<Que3 />} />
        <Route path='/que4' element= {<Que4 />} />
        <Route path='/que5' element= {<Que5 />} />
        <Route path='/que6' element= {<Que6 />} />
        <Route path='/que7' element= {<Que7 />} />
        <Route path='/que8' element= {<Que8 />} />
        <Route path='/que9' element= {<Que9 />} />
        <Route path='/que10' element= {<Que10 />} />
        <Route path='/submit' element= {<Submit/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
