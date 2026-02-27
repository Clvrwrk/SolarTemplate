import { useState, useRef, useEffect } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export function BeforeAfterSlider({ 
  beforeImage, 
  afterImage, 
  beforeAlt = 'Before cleaning',
  afterAlt = 'After cleaning'
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-80 md:h-96 overflow-hidden rounded-lg cursor-ew-resize select-none"
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={afterImage}
          alt={afterAlt}
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-['Poppins']"
          style={{ 
            backgroundColor: 'var(--color-action-orange)',
            color: 'white',
            fontWeight: 'var(--weight-semibold)'
          }}
        >
          After
        </div>
      </div>

      {/* Before Image (Overlay with clip) */}
      <div 
        className="absolute inset-0 transition-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <ImageWithFallback
          src={beforeImage}
          alt={beforeAlt}
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-['Poppins']"
          style={{ 
            backgroundColor: 'var(--color-primary-navy)',
            color: 'white',
            fontWeight: 'var(--weight-semibold)'
          }}
        >
          Before
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 cursor-ew-resize"
        style={{ 
          left: `${sliderPosition}%`,
          backgroundColor: 'white',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
        }}
      >
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center"
          style={{ 
            backgroundColor: 'white',
            boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)'
          }}
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            style={{ color: 'var(--color-primary-navy)' }}
          >
            <path d="M18 8L22 12L18 16" />
            <path d="M6 8L2 12L6 16" />
          </svg>
        </div>
      </div>
    </div>
  );
}
