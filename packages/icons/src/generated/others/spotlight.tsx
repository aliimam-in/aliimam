/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SpotlightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Spotlight = React.forwardRef<SVGSVGElement, SpotlightProps>(
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
      <path d="M15.295 19.562 16 22" />
  <path d="m17 16 3.758 2.098" />
  <path d="m19 12.5 3.026-.598" />
  <path d="M7.61 6.3a3 3 0 0 0-3.92 1.3l-1.38 2.79a3 3 0 0 0 1.3 3.91l6.89 3.597a1 1 0 0 0 1.342-.447l3.106-6.211a1 1 0 0 0-.447-1.341z" />
  <path d="M8 9V2" />
    </svg>
  )
);
Spotlight.displayName = "Spotlight";
export const SpotlightMetadata = { 
  id: "spotlight", 
  baseId: "spotlight", 
  variant: "default", 
  name: "Spotlight", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Spotlight;
