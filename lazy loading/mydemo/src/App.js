import React,{Suspense,lazy} from 'react';
import Loading from './components/Loading';
// import Home from './components/Home';
// import About from './components/About';
const Home = lazy(()=>import('./components/Home'));
const About = lazy(()=>import('./components/About'));

function App() {
  return (
      <div>
        <Suspense fallback={<div><Loading/></div>}>
          <Home/>
          <About/>
        </Suspense>
      </div>
    
  );
}

export default App;


// note: to see lazy loading 1.go to inspect  2.turn speed to slow 3G 3. then refresh to see its effect
