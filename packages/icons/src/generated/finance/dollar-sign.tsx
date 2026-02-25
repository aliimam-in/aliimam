/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DollarSignProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DollarSign = React.forwardRef<SVGSVGElement, DollarSignProps>(
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
      <line x1="12" x2="12" y1="2" y2="22" />
  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
);
DollarSign.displayName = "DollarSign";
export const DollarSignMetadata = { 
  id: "dollar-sign", 
  baseId: "dollar-sign", 
  variant: "default", 
  name: "Dollar Sign", 
  category: "finance", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DollarSign;
