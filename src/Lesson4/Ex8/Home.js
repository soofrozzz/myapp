import React,{useState,useEffect} from 'react'
import {Router, Link, Route, Switch} from 'react-router-dom';
import './css.css'
import First from './First'
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';



const Home = (props) => {

  return(
    <div>
      <h3>Home</h3>
      <Link to="/first">
      <button onClick={()=>localStorage.removeItem('data')}>
        Start
      </button>
      </Link>
        <Switch>
          <Route path="/first" exact component={First} />
          <Route path="/second" exact component={Second} />
          <Route path="/third" exact component={Third} />
          <Route path="/fourth" exact component={Fourth} />
        </Switch>
    </div>
  )
  
}

export default Home;