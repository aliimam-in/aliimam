/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface VideotapeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Videotape = React.forwardRef<SVGSVGElement, VideotapeProps>(
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
  <path d="M2 8h20" />
  <circle cx="8" cy="14" r="2" />
  <path d="M8 12h8" />
  <circle cx="16" cy="14" r="2" />
    </svg>
  )
);
Videotape.displayName = "Videotape";
export const VideotapeMetadata = { 
  id: "videotape", 
  baseId: "videotape", 
  variant: "default", 
  name: "Videotape", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Videotape;
