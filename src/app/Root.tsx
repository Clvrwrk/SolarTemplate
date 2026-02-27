import { Outlet } from 'react-router';
import { Toaster } from 'sonner';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export default function Root() {
  return (
    <div 
      className="min-h-screen"
      style={{ 
        fontFamily: 'Inter, sans-serif',
        backgroundColor: 'var(--color-bg-white)',
      }}
    >
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}
