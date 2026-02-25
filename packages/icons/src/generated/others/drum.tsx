/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DrumProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Drum = React.forwardRef<SVGSVGElement, DrumProps>(
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
      <path d="m2 2 8 8" />
  <path d="m22 2-8 8" />
  <ellipse cx="12" cy="9" rx="10" ry="5" />
  <path d="M7 13.4v7.9" />
  <path d="M12 14v8" />
  <path d="M17 13.4v7.9" />
  <path d="M2 9v8a10 5 0 0 0 20 0V9" />
    </svg>
  )
);
Drum.displayName = "Drum";
export const DrumMetadata = { 
  id: "drum", 
  baseId: "drum", 
  variant: "default", 
  name: "Drum", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Drum;
