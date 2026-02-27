import { useState, useRef, useEffect } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { Calendar } from 'lucide-react';
import 'react-day-picker/dist/style.css';

interface DatePickerProps {
  value: string;
  onChange: (date: string) => void;
  id?: string;
  name?: string;
}

export function DatePicker({ value, onChange, id, name }: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    value ? new Date(value) : undefined
  );
  const [inputValue, setInputValue] = useState(value);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDaySelect = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date);
      const formattedDate = format(date, 'yyyy-MM-dd');
      setInputValue(formattedDate);
      onChange(formattedDate);
      setIsOpen(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange(newValue);
    
    // Try to parse the input as a date
    const parsedDate = new Date(newValue);
    if (!isNaN(parsedDate.getTime())) {
      setSelectedDate(parsedDate);
    }
  };

  const handleInputFocus = () => {
    setIsOpen(true);
  };

  return (
    <div className="relative" ref={containerRef}>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          id={id}
          name={name}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          placeholder="YYYY-MM-DD or click calendar"
          className="w-full px-4 py-3 pr-12 rounded-lg font-['Inter'] transition-all duration-300"
          style={{
            fontSize: '16px',
            border: '2px solid var(--color-border-color)',
            color: 'var(--color-text-main)',
            backgroundColor: 'var(--color-bg-white)'
          }}
          onFocusCapture={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-accent-sky)';
            e.currentTarget.style.boxShadow = '0 0 0 4px rgba(52, 152, 219, 0.15)';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-border-color)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        />
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-all duration-200"
          style={{
            color: 'var(--color-accent-sky)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-accent-sky-light)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <Calendar className="w-5 h-5" />
        </button>
      </div>

      {/* Calendar Popout */}
      {isOpen && (
        <div
          className="absolute z-50 mt-2 rounded-xl shadow-2xl overflow-hidden"
          style={{
            backgroundColor: 'white',
            border: '1px solid var(--color-border-color)',
            animation: 'slideDown 0.2s ease-out'
          }}
        >
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={handleDaySelect}
            disabled={{ before: new Date() }}
            showOutsideDays
            className="premium-day-picker"
          />
        </div>
      )}

      {/* Custom Styles for DayPicker */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .premium-day-picker {
          padding: 16px;
          font-family: 'Inter', sans-serif;
        }

        .premium-day-picker .rdp-caption {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 12px;
        }

        .premium-day-picker .rdp-caption_label {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 16px;
          color: var(--color-primary-navy);
        }

        .premium-day-picker .rdp-nav {
          display: flex;
          gap: 4px;
        }

        .premium-day-picker .rdp-nav_button {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          border: none;
          background: transparent;
          cursor: pointer;
        }

        .premium-day-picker .rdp-nav_button:hover {
          background-color: var(--color-accent-sky-light);
        }

        .premium-day-picker .rdp-nav_button svg {
          width: 16px;
          height: 16px;
          color: var(--color-primary-navy);
        }

        .premium-day-picker .rdp-head_cell {
          font-weight: 600;
          font-size: 12px;
          color: var(--color-text-muted);
          text-transform: uppercase;
          padding: 8px 0;
        }

        .premium-day-picker .rdp-cell {
          padding: 2px;
        }

        .premium-day-picker .rdp-day {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s;
          border: none;
          background: transparent;
          cursor: pointer;
          color: var(--color-text-main);
        }

        .premium-day-picker .rdp-day:hover:not(.rdp-day_selected):not(.rdp-day_disabled) {
          background-color: var(--color-accent-sky-light);
          color: var(--color-accent-sky);
        }

        .premium-day-picker .rdp-day_selected {
          background-color: var(--color-accent-sky) !important;
          color: white !important;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
        }

        .premium-day-picker .rdp-day_today:not(.rdp-day_selected) {
          border: 2px solid var(--color-action-orange);
          color: var(--color-action-orange);
          font-weight: 600;
        }

        .premium-day-picker .rdp-day_disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .premium-day-picker .rdp-day_outside {
          color: var(--color-text-muted);
          opacity: 0.5;
        }

        .premium-day-picker .rdp-months {
          display: flex;
          gap: 16px;
        }

        .premium-day-picker .rdp-month {
          min-width: 280px;
        }

        .premium-day-picker .rdp-table {
          border-collapse: separate;
          border-spacing: 0;
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .premium-day-picker {
            padding: 12px;
          }

          .premium-day-picker .rdp-day {
            width: 36px;
            height: 36px;
            font-size: 13px;
          }

          .premium-day-picker .rdp-month {
            min-width: 260px;
          }
        }
      `}</style>
    </div>
  );
}
