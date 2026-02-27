import { useNavigate } from 'react-router';
import { Home } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: 'var(--color-bg-gray)' }}
    >
      <div className="text-center">
        <h1 
          className="text-6xl font-bold mb-4"
          style={{ 
            color: 'var(--color-primary-navy)',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          404
        </h1>
        <h2 
          className="text-2xl font-semibold mb-4"
          style={{ 
            color: 'var(--color-primary-navy)',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          Page Not Found
        </h2>
        <p 
          className="text-lg mb-8"
          style={{ 
            color: 'var(--color-text-muted)',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          The page you're looking for doesn't exist.
        </p>
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
          style={{
            backgroundColor: 'var(--color-action-orange)',
            color: 'white',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          <Home size={20} />
          Go Home
        </button>
      </div>
    </div>
  );
}
