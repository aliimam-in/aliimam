/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AlbumProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Album = React.forwardRef<SVGSVGElement, AlbumProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
  <polyline points="11 3 11 11 14 8 17 11 17 3" />
    </svg>
  )
);
Album.displayName = "Album";
export const AlbumMetadata = { 
  id: "album", 
  baseId: "album", 
  variant: "default", 
  name: "Album", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Album;
