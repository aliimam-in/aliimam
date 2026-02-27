/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowUp3RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowUp3Rounded = React.forwardRef<SVGSVGElement, ArrowUp3RoundedProps>(
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
      <path d="M11.9999 18H9.32992C6.01992 18 4.65992 15.65 6.31992 12.78L7.65992 10.47L8.99992 8.16C10.6599 5.29 13.3699 5.29 15.0299 8.16L16.3699 10.47L17.7099 12.78C19.3699 15.65 18.0099 18 14.6999 18H11.9999Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ArrowUp3Rounded.displayName = "ArrowUp3Rounded";
export const ArrowUp3RoundedMetadata = { 
  id: "arrow-up-3_rounded", 
  baseId: "arrow-up-3", 
  variant: "rounded", 
  name: "Arrow Up 3", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowUp3Rounded;
