/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface WormProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Worm = React.forwardRef<SVGSVGElement, WormProps>(
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
      <path d="m19 12-1.5 3" />
  <path d="M19.63 18.81 22 20" />
  <path d="M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z" />
    </svg>
  )
);
Worm.displayName = "Worm";
export const WormMetadata = { 
  id: "worm", 
  baseId: "worm", 
  variant: "default", 
  name: "Worm", 
  category: "animal", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Worm;
