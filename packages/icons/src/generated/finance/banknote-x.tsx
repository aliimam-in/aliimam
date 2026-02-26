/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BanknoteXProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BanknoteX = React.forwardRef<SVGSVGElement, BanknoteXProps>(
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
      <path d="M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" />
  <path d="m17 17 5 5" />
  <path d="M18 12h.01" />
  <path d="m22 17-5 5" />
  <path d="M6 12h.01" />
  <circle cx="12" cy="12" r="2" />
    </svg>
  )
);
BanknoteX.displayName = "BanknoteX";
export const BanknoteXMetadata = { 
  id: "banknote-x", 
  baseId: "banknote-x", 
  variant: "default", 
  name: "Banknote X", 
  category: "finance", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BanknoteX;
