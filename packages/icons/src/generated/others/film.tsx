/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FilmProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Film = React.forwardRef<SVGSVGElement, FilmProps>(
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
  <path d="M7 3v18" />
  <path d="M3 7.5h4" />
  <path d="M3 12h18" />
  <path d="M3 16.5h4" />
  <path d="M17 3v18" />
  <path d="M17 7.5h4" />
  <path d="M17 16.5h4" />
    </svg>
  )
);
Film.displayName = "Film";
export const FilmMetadata = { 
  id: "film", 
  baseId: "film", 
  variant: "default", 
  name: "Film", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Film;
