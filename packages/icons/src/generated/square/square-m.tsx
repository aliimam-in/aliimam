/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareMProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareM = React.forwardRef<SVGSVGElement, SquareMProps>(
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
      <path d="M8 16V8.5a.5.5 0 0 1 .9-.3l2.7 3.599a.5.5 0 0 0 .8 0l2.7-3.6a.5.5 0 0 1 .9.3V16" />
  <rect x="3" y="3" width="18" height="18" rx="2" />
    </svg>
  )
);
SquareM.displayName = "SquareM";
export const SquareMMetadata = { 
  id: "square-m", 
  baseId: "square-m", 
  variant: "default", 
  name: "Square M", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareM;
