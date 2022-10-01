import classes from './App.scss';
import { Route, Routes } from 'react-router-dom'
import { All } from './components/menu/All';
import { Designers } from './components/menu/Designers';
import { Analysts } from './components/menu/Analysts';
import { Managers } from './components/menu/Managers';
import { Ios } from './components/menu/Ios';
import { Android } from './components/menu/Android';
import { PersonPage } from './components/personPage/PersonPage';
import { ModalContext } from './components/context/ModalContext';
import { InputContext } from './components/context/InputContext';


function App() {
  return (
    <ModalContext>
      <InputContext>
        <div className={classes.container}>
          <Routes>
            <Route exact="true" path='/' element={<All />} />
            <Route path='/designers' element={<Designers />} />
            <Route path='/analysts' element={<Analysts />} />
            <Route path='/managers' element={<Managers />} />
            <Route path='/ios' element={<Ios />} />
            <Route path='/android' element={<Android />} />
            <Route path='/:id' element={<PersonPage />} />
          </Routes>
        </div>
      </InputContext>
    </ModalContext>
  );
}

export default App;
