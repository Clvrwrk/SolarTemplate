import { useState } from 'react';
import { Download } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1771479755055-6a305f50845e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljaWFuJTIwY2xlYW5pbmclMjBzb2xhciUyMHBhbmVscyUyMHJlc2lkZW50aWFsJTIwcm9vZnxlbnwxfHx8fDE3NzIxMzEyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: 'Professional technician performing residential solar panel maintenance.',
    height: 'h-80'
  },
  {
    url: 'https://images.unsplash.com/photo-1769340624664-f044b9d0f800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXJ0eSUyMHNvbGFyJTIwcGFuZWxzJTIwZHVzdCUyMHVyYmFuJTIwY2l0eXNjYXBlfGVufDF8fHx8MTc3MjE2NTA1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: 'The impact of urban dust on solar efficiency.',
    height: 'h-64'
  },
  {
    url: 'https://images.unsplash.com/photo-1726866492047-7f9516558c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBzb2xhciUyMHBhbmVscyUyMGNsZWFufGVufDF8fHx8MTc3MjE2NTA1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: 'Commercial solar panel cleaning operations.',
    height: 'h-72'
  }
];

export function MediaGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleDownload = (caption: string) => {
    alert(`High-res download for "${caption}" would start here.`);
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            className="font-['Poppins'] text-3xl md:text-4xl mb-4"
            style={{ 
              color: 'var(--color-primary-navy)',
              fontWeight: 'var(--weight-bold)'
            }}
          >
            High-Res Media Gallery
          </h2>
          <p 
            className="font-['Inter'] text-lg leading-relaxed max-w-3xl mx-auto"
            style={{ color: 'var(--color-text-main)' }}
          >
            Download professional photography for press releases, articles, and media coverage. 
            All images are available in high resolution.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleDownload(image.caption)}
            >
              <div className={`${image.height} overflow-hidden`}>
                <ImageWithFallback
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div 
                className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ backgroundColor: 'rgba(11, 43, 83, 0.85)' }}
              >
                <Download 
                  className="w-12 h-12 mb-4 text-white"
                />
                <button
                  className="px-6 py-3 rounded-lg font-['Poppins'] text-white transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: 'var(--color-action-orange)',
                    fontWeight: 'var(--weight-semibold)'
                  }}
                >
                  Download High-Res
                </button>
                <p 
                  className="mt-4 font-['Inter'] text-sm text-white"
                >
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="mt-8 p-4 rounded-lg"
          style={{ backgroundColor: 'var(--color-accent-sky-light)' }}
        >
          <p 
            className="font-['Inter'] text-sm leading-relaxed text-center"
            style={{ color: 'var(--color-text-main)' }}
          >
            <strong>Usage Rights:</strong> All images are licensed for editorial use in 
            connection with Power Up Solar Clean media coverage. For commercial use or 
            modifications, please contact our media team.
          </p>
        </div>
      </div>
    </section>
  );
}
