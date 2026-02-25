/**
 * Auto-generated logo component: Haskell (default)
 * Category: language
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HaskellProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Haskell = React.forwardRef<SVGSVGElement, HaskellProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M4.5 21.5H0.5L6.5 12.5L0.5 3.5H4.5L10.5 12.5L4.5 21.5Z" fill="#453A62"/>
<path d="M10 3.5H6L12 12.5L6 21.5H10L14.08 15.38L18 21.5H22L10 3.5Z" fill="#5E5086"/>
<path d="M17.169 12H23.5V9H15.169L17.169 12ZM20.169 16.5H23.5V13.5H18.169L20.169 16.5Z" fill="#8F4E8B"/>
    </svg>
  )
);

Haskell.displayName = "Haskell";

export const HaskellMetadata = {
  id: "Haskell",
  baseId: "Haskell",
  variant: "default",
  name: "Haskell",
  category: "language",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Haskell;
