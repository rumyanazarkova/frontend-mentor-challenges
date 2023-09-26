import ThankYou from './ThankYou';
import HowDidWeDo from './HowDidWeDo';
import { useState } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';


function App() {
  const [number, setNumber] = useState(0);

  return (
    <Router>
      <Routes>
    <Route path="/" element={<HowDidWeDo number={number} setNumber={setNumber}/>}/>
    <Route path="/thankyou" element={<ThankYou number={number}/>}/>
    </Routes>
    </Router>
  )
}

export default App
