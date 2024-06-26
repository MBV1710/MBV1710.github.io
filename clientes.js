import { useState } from 'react';

export default function Clientes() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/clients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone }),
    });

    if (res.ok) {
      alert('Client registered!');
    } else {
      alert('Error registering client.');
    }
  };

  return (
    <div>
      <h1>Cadastro de Clientes</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
