import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactForm from './components/ContactForm';
import ContactsList from './components/ContactsList';
import Header from './components/Header';

const App = () => (
  <BrowserRouter>
    <Header />
    <div className="main-container">
      <Routes>
        <Route path="/" element={<ContactForm />} />
        <Route path="/list" element={<ContactsList />}  />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
