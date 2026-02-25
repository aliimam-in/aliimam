/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HazeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Haze = React.forwardRef<SVGSVGElement, HazeProps>(
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
      <path d="m5.2 6.2 1.4 1.4" />
  <path d="M2 13h2" />
  <path d="M20 13h2" />
  <path d="m17.4 7.6 1.4-1.4" />
  <path d="M22 17H2" />
  <path d="M22 21H2" />
  <path d="M16 13a4 4 0 0 0-8 0" />
  <path d="M12 5V2.5" />
    </svg>
  )
);
Haze.displayName = "Haze";
export const HazeMetadata = { 
  id: "haze", 
  baseId: "haze", 
  variant: "default", 
  name: "Haze", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Haze;
