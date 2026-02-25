/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Dice5Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Dice5 = React.forwardRef<SVGSVGElement, Dice5Props>(
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
  <path d="M12 12h.01" />
    </svg>
  )
);
Dice5.displayName = "Dice5";
export const Dice5Metadata = { 
  id: "dice-5", 
  baseId: "dice-5", 
  variant: "default", 
  name: "Dice 5", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Dice5;
