import { BrowserRouter } from 'react-router-dom'

import { About, Contact, Experience, Feedbacks,
Hero, Navbar, Tech, Works, StarsCanvas} from './components'
import Exhibits from './components/Exhibits';

const App = () => {
  return (
    <BrowserRouter>
      <div className='absolute bg-amber-700'>
        <div className='relative z-0 bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
      
        <Exhibits />
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;