import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Todo from '../Todo/Todo';
import AboutMe from '../AboutMe/AboutMe';
import styles from './App.module.css';

const App = () => (
  <div className={styles.app}>
    <Router>
      <header className={styles.header}>
        <nav>
          <NavLink
            to='/'
            exact
            className={styles.link}
            activeStyle={{
              color: '#FFF',  
              background: '#356EFF',
              boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.25)',
              borderRadius: '37px',
            }}
          >
            Обо мне
          </NavLink>
          <NavLink
            to='/todo'
            className={styles.link} 
            activeStyle={{
              color: '#FFF',
              background: '#356EFF',
              boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.25)',
              borderRadius: '37px',
            }}
          >
            Дела
          </NavLink>
        </nav>
      </header>
  
      <main>
        <Route path='/' exact component={AboutMe} />
        <Route path='/todo' component={Todo} />
      </main>
    </Router>
  </div>
);

export default App;