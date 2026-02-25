/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ListMusicProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ListMusic = React.forwardRef<SVGSVGElement, ListMusicProps>(
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
      <path d="M16 5H3" />
  <path d="M11 12H3" />
  <path d="M11 19H3" />
  <path d="M21 16V5" />
  <circle cx="18" cy="16" r="3" />
    </svg>
  )
);
ListMusic.displayName = "ListMusic";
export const ListMusicMetadata = { 
  id: "list-music", 
  baseId: "list-music", 
  variant: "default", 
  name: "List Music", 
  category: "list", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ListMusic;
