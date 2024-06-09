import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Restaurante</h1>
      <nav>
        <ul>
          <li><Link href="/reservas">Reservas</Link></li>
          <li><Link href="/delivery">Delivery</Link></li>
          <li><Link href="/cardapio">Cardápio</Link></li>
        </ul>
      </nav>
    </div>
  );
}