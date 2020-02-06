import React from 'react';
import RickAndMorty from './rickAndMorty';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Details from '../components/Details';
import Header from '../components/Header';

export default function App() {
  return (
    <>
      <Router>
      <Header />
        <Route exact path="/" component={RickAndMorty}/>
        <Route path="/details/:id" component={Details}/>
      </Router>
    </>
  );
}
  
