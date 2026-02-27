interface FilterTabsProps {
  activeFilter: 'all' | 'residential' | 'commercial';
  onFilterChange: (filter: 'all' | 'residential' | 'commercial') => void;
}

export function FilterTabs({ activeFilter, onFilterChange }: FilterTabsProps) {
  const tabs = [
    { id: 'all' as const, label: 'All Projects' },
    { id: 'residential' as const, label: 'Residential' },
    { id: 'commercial' as const, label: 'Commercial' }
  ];

  return (
    <div 
      className="sticky top-0 z-40 py-4 px-4 sm:px-6 lg:px-8 shadow-md"
      style={{ 
        backgroundColor: 'white',
        borderBottom: '1px solid var(--color-border-color)'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-2 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onFilterChange(tab.id)}
              className="px-6 py-3 rounded-lg font-['Poppins'] whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5"
              style={{
                backgroundColor: activeFilter === tab.id 
                  ? 'var(--color-primary-navy)' 
                  : 'var(--color-bg-gray)',
                color: activeFilter === tab.id 
                  ? 'white' 
                  : 'var(--color-text-main)',
                fontWeight: 'var(--weight-semibold)',
                boxShadow: activeFilter === tab.id 
                  ? '0 4px 12px rgba(11, 43, 83, 0.3)' 
                  : 'none'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
