import { ChevronRight, Home } from 'lucide-react';
import { useNavigate } from 'react-router';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface LocationBreadcrumbProps {
  items: BreadcrumbItem[];
}

export function LocationBreadcrumb({ items }: LocationBreadcrumbProps) {
  const navigate = useNavigate();

  return (
    <nav 
      className="py-4 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-bg-gray)' }}
      aria-label="Breadcrumb"
    >
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center gap-2 flex-wrap text-sm">
          {/* Home */}
          <li>
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-1 transition-colors hover:underline"
              style={{ color: 'var(--color-text-muted)', fontFamily: 'Inter, sans-serif' }}
            >
              <Home size={16} />
              <span>Home</span>
            </button>
          </li>

          {/* Items */}
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight size={16} style={{ color: 'var(--color-border-color)' }} />
              {item.path && index < items.length - 1 ? (
                <button
                  onClick={() => navigate(item.path)}
                  className="transition-colors hover:underline"
                  style={{ color: 'var(--color-text-muted)', fontFamily: 'Inter, sans-serif' }}
                >
                  {item.label}
                </button>
              ) : (
                <span
                  className="font-medium"
                  style={{ 
                    color: 'var(--color-primary-navy)', 
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
