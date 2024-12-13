import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm({ setFormData }) {
  const [formValues, setFormValues] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (formValues.name.trim().length < 3) {
      errors.name = 'El nombre debe tener al menos 3 caracteres.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      errors.email = 'El email no tiene un formato válido.';
    }
    if (formValues.password.length < 6) {
      errors.password = 'La contraseña debe tener al menos 6 caracteres.';
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setFormData(formValues);
      navigate('/confirmation');
    }
  };

  return (
    <div>
      <h1>Registro</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input name="name" value={formValues.name} onChange={handleChange} />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input name="email" value={formValues.email} onChange={handleChange} />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            name="password"
            type="password"
            value={formValues.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}