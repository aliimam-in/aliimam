/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface OctagonXProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const OctagonX = React.forwardRef<SVGSVGElement, OctagonXProps>(
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
      <path d="m15 9-6 6" />
  <path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" />
  <path d="m9 9 6 6" />
    </svg>
  )
);
OctagonX.displayName = "OctagonX";
export const OctagonXMetadata = { 
  id: "octagon-x", 
  baseId: "octagon-x", 
  variant: "default", 
  name: "Octagon X", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default OctagonX;
