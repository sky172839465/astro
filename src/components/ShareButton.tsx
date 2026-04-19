import React from 'react';
import { Button } from './ui/button';
import { Share2 } from 'lucide-react';

interface ShareButtonProps {
  title: string;
  url: string;
  variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
  showText?: boolean;
}

const ShareButton: React.FC<ShareButtonProps> = ({ title, url, variant = "outline", size = "sm", showText = true }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      } catch (error) {
        console.error('Error copying to clipboard:', error);
      }
    }
  };

  return (
    <Button variant={variant} size={size} onClick={handleShare} className="flex items-center gap-2">
      <Share2 className="h-[1.2rem] w-[1.2rem]" />
      {showText && "Share"}
      <span className="sr-only">Share this page</span>
    </Button>
  );
};

export default ShareButton;
