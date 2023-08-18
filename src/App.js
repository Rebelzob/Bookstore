import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BookList from './components/BookList';
import Categories from './components/Categories';
import NavBar from './components/NavBar';
import FormAddBook from './components/FormAddBook';

function App() {
  return (
    <MemoryRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <FormAddBook />
    </MemoryRouter>
  );
}

export default App;
