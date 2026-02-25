/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AmpersandsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ampersands = React.forwardRef<SVGSVGElement, AmpersandsProps>(
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
      <path d="M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5" />
  <path d="M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5" />
    </svg>
  )
);
Ampersands.displayName = "Ampersands";
export const AmpersandsMetadata = { 
  id: "ampersands", 
  baseId: "ampersands", 
  variant: "default", 
  name: "Ampersands", 
  category: "letter", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Ampersands;
