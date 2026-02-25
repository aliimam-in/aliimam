/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Dice4Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Dice4 = React.forwardRef<SVGSVGElement, Dice4Props>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
  <path d="M16 8h.01" />
  <path d="M8 8h.01" />
  <path d="M8 16h.01" />
  <path d="M16 16h.01" />
    </svg>
  )
);
Dice4.displayName = "Dice4";
export const Dice4Metadata = { 
  id: "dice-4", 
  baseId: "dice-4", 
  variant: "default", 
  name: "Dice 4", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Dice4;
