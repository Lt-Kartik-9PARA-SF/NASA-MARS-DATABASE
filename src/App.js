import logo from './logo.svg';
import React, { Suspense } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Footer';
const Display = React.lazy(()=>import('./Components/Display'));


function App() {
  return (
    <div>
    <Header/>
    
    <Suspense fallback={<div>Loading...</div>}>
       <Display/>
     </Suspense>
    
      <Footer/>
    </div>
  );
}

export default App;
