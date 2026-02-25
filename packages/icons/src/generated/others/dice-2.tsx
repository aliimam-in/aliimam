/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Dice2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Dice2 = React.forwardRef<SVGSVGElement, Dice2Props>(
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
  <path d="M15 9h.01" />
  <path d="M9 15h.01" />
    </svg>
  )
);
Dice2.displayName = "Dice2";
export const Dice2Metadata = { 
  id: "dice-2", 
  baseId: "dice-2", 
  variant: "default", 
  name: "Dice 2", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Dice2;
