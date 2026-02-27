/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface KeyboardRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const KeyboardRounded = React.forwardRef<SVGSVGElement, KeyboardRoundedProps>(
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
      <path d="M7.5 4H16.5C17.12 4 17.67 4.02 18.16 4.09C20.79 4.38 21.5 5.62 21.5 9V15C21.5 18.38 20.79 19.62 18.16 19.91C17.67 19.98 17.12 20 16.5 20H7.5C6.88 20 6.33 19.98 5.84 19.91C3.21 19.62 2.5 18.38 2.5 15V9C2.5 5.62 3.21 4.38 5.84 4.09C6.33 4.02 6.88 4 7.5 4Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.5 10H17"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 15.5H7.02H17"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.0946 10H10.1036"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.0946 10H7.10359"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
KeyboardRounded.displayName = "KeyboardRounded";
export const KeyboardRoundedMetadata = { 
  id: "keyboard_rounded", 
  baseId: "keyboard", 
  variant: "rounded", 
  name: "Keyboard", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default KeyboardRounded;
