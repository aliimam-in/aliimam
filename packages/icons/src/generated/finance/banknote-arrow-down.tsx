/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BanknoteArrowDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BanknoteArrowDown = React.forwardRef<SVGSVGElement, BanknoteArrowDownProps>(
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
      <path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" />
  <path d="m16 19 3 3 3-3" />
  <path d="M18 12h.01" />
  <path d="M19 16v6" />
  <path d="M6 12h.01" />
  <circle cx="12" cy="12" r="2" />
    </svg>
  )
);
BanknoteArrowDown.displayName = "BanknoteArrowDown";
export const BanknoteArrowDownMetadata = { 
  id: "banknote-arrow-down", 
  baseId: "banknote-arrow-down", 
  variant: "default", 
  name: "Banknote Arrow Down", 
  category: "finance", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BanknoteArrowDown;
