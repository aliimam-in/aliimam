/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BubbleFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BubbleFilled = React.forwardRef<SVGSVGElement, BubbleFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M15.59 1.75C12.62 1.75 10.21 4.16 10.21 7.13C10.21 10.1 12.62 12.51 15.59 12.51C18.56 12.51 20.97 10.1 20.97 7.13C20.97 4.16 18.56 1.75 15.59 1.75Z" fill="currentColor"/>
<path d="M6.36 13.0298C4.53 13.0298 3.03 14.5198 3.03 16.3598C3.03 18.1998 4.52 19.6898 6.36 19.6898C8.19 19.6898 9.69 18.1998 9.69 16.3598C9.69 14.5198 8.19 13.0298 6.36 13.0298Z" fill="currentColor"/>
<path d="M16.62 16.6201C15.07 16.6201 13.81 17.8801 13.81 19.4301C13.81 20.9801 15.07 22.2401 16.62 22.2401C18.17 22.2401 19.43 20.9801 19.43 19.4301C19.43 17.8801 18.17 16.6201 16.62 16.6201Z" fill="currentColor"/>
    </svg>
  )
);
BubbleFilled.displayName = "BubbleFilled";
export const BubbleFilledMetadata = { 
  id: "bubble_filled", 
  baseId: "bubble", 
  variant: "filled", 
  name: "Bubble", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BubbleFilled;
