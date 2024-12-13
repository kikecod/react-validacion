import  { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import ConfirmationPage from './components/ConfirmationPage';

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterForm setFormData={setFormData} />} />
        <Route path="/confirmation" element={<ConfirmationPage formData={formData} />} />
      </Routes>
    </BrowserRouter>
  );
}