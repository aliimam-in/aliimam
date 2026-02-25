/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DiscAlbumProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DiscAlbum = React.forwardRef<SVGSVGElement, DiscAlbumProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <circle cx="12" cy="12" r="5" />
  <path d="M12 12h.01" />
    </svg>
  )
);
DiscAlbum.displayName = "DiscAlbum";
export const DiscAlbumMetadata = { 
  id: "disc-album", 
  baseId: "disc-album", 
  variant: "default", 
  name: "Disc Album", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DiscAlbum;
