import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

interface CopyButtonProps {
  text: string;
  label?: string;
  variant?: 'inline' | 'block';
  successMessage?: string;
}

// Fallback copy function for restricted contexts
const copyToClipboard = async (text: string): Promise<boolean> => {
  // Try modern Clipboard API first
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      console.warn('Clipboard API failed, using fallback:', err);
    }
  }

  // Fallback: Create a temporary textarea
  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-999999px';
    textarea.style.top = '-999999px';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    
    const successful = document.execCommand('copy');
    document.body.removeChild(textarea);
    
    return successful;
  } catch (err) {
    console.error('Fallback copy failed:', err);
    return false;
  }
};

export function CopyButton({ text, label = 'Copy', variant = 'inline', successMessage }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(text);
    
    if (success) {
      setIsCopied(true);
      toast.success(successMessage || 'Copied to clipboard!');

      setTimeout(() => {
        setIsCopied(false);
      }, 2500);
    } else {
      toast.error('Failed to copy. Please try selecting and copying manually.');
    }
  };

  if (variant === 'block') {
    return (
      <button
        onClick={handleCopy}
        className={`px-4 py-2 rounded-lg font-['Inter'] transition-all duration-300 flex items-center gap-2 ${
          isCopied ? 'pointer-events-none' : 'hover:-translate-y-0.5'
        }`}
        style={{
          backgroundColor: isCopied ? '#28a745' : 'var(--color-accent-sky)',
          color: 'white',
          fontWeight: 'var(--weight-medium)',
          boxShadow: isCopied ? 'none' : '0 2px 8px rgba(52, 152, 219, 0.3)'
        }}
      >
        {isCopied ? (
          <>
            <Check className="w-4 h-4" />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" />
            <span>{label}</span>
          </>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={handleCopy}
      className={`p-2 rounded-md transition-all duration-300 ${
        isCopied ? 'pointer-events-none' : 'hover:bg-opacity-20'
      }`}
      style={{
        backgroundColor: isCopied ? '#28a745' : 'rgba(52, 152, 219, 0.1)',
        color: isCopied ? 'white' : 'var(--color-accent-sky)'
      }}
      title={isCopied ? 'Copied!' : label}
    >
      {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
    </button>
  );
}