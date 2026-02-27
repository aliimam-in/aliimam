/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CardRemove1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CardRemove1Rounded = React.forwardRef<SVGSVGElement, CardRemove1RoundedProps>(
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
      <path d="M2 8.5H13.5" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 16.5H8" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.5 16.5H14.5" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 12.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H13.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.3086 8.18957L21.1886 4.30957" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M21.1886 8.18957L17.3086 4.30957" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
);
CardRemove1Rounded.displayName = "CardRemove1Rounded";
export const CardRemove1RoundedMetadata = { 
  id: "card-remove-1_rounded", 
  baseId: "card-remove-1", 
  variant: "rounded", 
  name: "Card Remove 1", 
  category: "finance", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CardRemove1Rounded;
