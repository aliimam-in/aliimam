/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SpellCheck2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SpellCheck2 = React.forwardRef<SVGSVGElement, SpellCheck2Props>(
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
      <path d="m6 16 6-12 6 12" />
  <path d="M8 12h8" />
  <path d="M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1" />
    </svg>
  )
);
SpellCheck2.displayName = "SpellCheck2";
export const SpellCheck2Metadata = { 
  id: "spell-check-2", 
  baseId: "spell-check-2", 
  variant: "default", 
  name: "Spell Check 2", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SpellCheck2;
