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
            className={styles.header__link}
            activeClassName={styles['header_about']}
          >
            Обо мне
          </NavLink>
          <NavLink
            to='todo'
            className={styles.header_link}
            activeClassName={styles.header_todo}
          >
            Дела
          </NavLink>
        </nav>
      </header>
  
      <main>
        <Route path='/' exact component={AboutMe} />
        <Route path='todo' component={Todo} />
      </main>
    </Router>
  </div>
);

export default App;