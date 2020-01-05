import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Todo from '../Todo/Todo';
import AboutMe from '../AboutMe/AboutMe';
import styles from './App.module.css';

const App = () => (
  <main className={styles.app}>
    <Router>
      <header className={styles.header}>
        <nav>
          <NavLink
            to='/'
            exact
            className={styles.header_link}
            activeClassName={styles['header_about']}
          >
            Обо мне
          </NavLink>
          <NavLink
            to='Todo'
            className={styles.header_link}
            activeClassName={styles.header_todo}
          >
            Дела
          </NavLink>
        </nav>
      </header>
  
      <main>
        <Route path='/' exact component={AboutMe} />
        <Route path='/Todo' component={Todo} />
      </main>
    </Router>
  </main>
);

export default App;