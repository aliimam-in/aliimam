/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Music4Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Music4 = React.forwardRef<SVGSVGElement, Music4Props>(
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
      <path d="M9 18V5l12-2v13" />
  <path d="m9 9 12-2" />
  <circle cx="6" cy="18" r="3" />
  <circle cx="18" cy="16" r="3" />
    </svg>
  )
);
Music4.displayName = "Music4";
export const Music4Metadata = { 
  id: "music-4", 
  baseId: "music-4", 
  variant: "default", 
  name: "Music 4", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Music4;
