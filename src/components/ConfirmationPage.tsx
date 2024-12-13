import React from 'react';

export default function ConfirmationPage({ formData }) {
  return (
    <div>
      <h1>Registro Exitoso</h1>
      <p><strong>Nombre:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Contraseña:</strong> {formData.password}</p>
    </div>
  );
}