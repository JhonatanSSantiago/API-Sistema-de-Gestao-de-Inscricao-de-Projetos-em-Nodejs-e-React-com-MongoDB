import React from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Home } from './pages/home';
import { Login } from './pages/login';
import { Form } from './pages/form';
import { Premio } from './pages/premio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/login" element={<Login />}> </Route>

        <Route path="/form" element={<Form />}> </Route>
        <Route path="/premio" element={<Premio />}> </Route>
      </Routes>
    </Router>
  );
}

export default App;
