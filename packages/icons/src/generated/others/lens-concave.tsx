/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LensConcaveProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LensConcave = React.forwardRef<SVGSVGElement, LensConcaveProps>(
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
      <path d="M7 2a1 1 0 0 0-.8 1.6 14 14 0 0 1 0 16.8A1 1 0 0 0 7 22h10a1 1 0 0 0 .8-1.6 14 14 0 0 1 0-16.8A1 1 0 0 0 17 2z" />
    </svg>
  )
);
LensConcave.displayName = "LensConcave";
export const LensConcaveMetadata = { 
  id: "lens-concave", 
  baseId: "lens-concave", 
  variant: "default", 
  name: "Lens Concave", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LensConcave;
