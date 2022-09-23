import classes from './App.scss';
import { Route, Routes } from 'react-router-dom'
import { All } from './components/menu/All';
import { Designers } from './components/menu/Designers';
import { Analysts } from './components/menu/Analysts';
import { Managers } from './components/menu/Managers';
import { Ios } from './components/menu/Ios';
import { Android } from './components/menu/Android';
import { PersonPage } from './components/personPage/PersonPage';


function App() {
  return (
    <div className={classes.container}>
      <Routes>
        <Route exact path='/' element={<All />} />
        <Route exact path='/designers' element={<Designers />} />
        <Route path='/analysts' element={<Analysts />} />
        <Route path='/managers' element={<Managers />} />
        <Route path='/ios' element={<Ios />} />
        <Route path='/android' element={<Android />} />
        <Route path='/:id' element={<PersonPage />} />
      </Routes>
    </div>
  );
}

export default App;
