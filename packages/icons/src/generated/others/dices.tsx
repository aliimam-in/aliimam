/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DicesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Dices = React.forwardRef<SVGSVGElement, DicesProps>(
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
      <rect width="12" height="12" x="2" y="10" rx="2" ry="2" />
  <path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6" />
  <path d="M6 18h.01" />
  <path d="M10 14h.01" />
  <path d="M15 6h.01" />
  <path d="M18 9h.01" />
    </svg>
  )
);
Dices.displayName = "Dices";
export const DicesMetadata = { 
  id: "dices", 
  baseId: "dices", 
  variant: "default", 
  name: "Dices", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Dices;
