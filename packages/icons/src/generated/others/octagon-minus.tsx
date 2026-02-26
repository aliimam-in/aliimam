/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface OctagonMinusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const OctagonMinus = React.forwardRef<SVGSVGElement, OctagonMinusProps>(
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
      <path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" />
  <path d="M8 12h8" />
    </svg>
  )
);
OctagonMinus.displayName = "OctagonMinus";
export const OctagonMinusMetadata = { 
  id: "octagon-minus", 
  baseId: "octagon-minus", 
  variant: "default", 
  name: "Octagon Minus", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default OctagonMinus;
