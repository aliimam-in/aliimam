/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BanknoteProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Banknote = React.forwardRef<SVGSVGElement, BanknoteProps>(
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
      <rect width="20" height="12" x="2" y="6" rx="2" />
  <circle cx="12" cy="12" r="2" />
  <path d="M6 12h.01M18 12h.01" />
    </svg>
  )
);
Banknote.displayName = "Banknote";
export const BanknoteMetadata = { 
  id: "banknote", 
  baseId: "banknote", 
  variant: "default", 
  name: "Banknote", 
  category: "finance", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Banknote;
