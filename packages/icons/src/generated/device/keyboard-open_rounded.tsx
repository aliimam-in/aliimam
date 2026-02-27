/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface KeyboardOpenRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const KeyboardOpenRounded = React.forwardRef<SVGSVGElement, KeyboardOpenRoundedProps>(
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
      <path d="M7.25998 2H16.73C17.38 2 17.96 2.02003 18.48 2.09003C21.25 2.40003 22 3.70001 22 7.26001V13.58C22 17.14 21.25 18.44 18.48 18.75C17.96 18.82 17.39 18.84 16.73 18.84H7.25998C6.60998 18.84 6.02998 18.82 5.50998 18.75C2.73998 18.44 1.98999 17.14 1.98999 13.58V7.26001C1.98999 3.70001 2.73998 2.40003 5.50998 2.09003C6.02998 2.02003 6.60998 2 7.25998 2Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.58 8.32001H17.2599"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.73999 14.11H6.75998H17.27"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 22H17"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.1947 8.29999H7.20368"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.4945 8.29999H10.5035"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
KeyboardOpenRounded.displayName = "KeyboardOpenRounded";
export const KeyboardOpenRoundedMetadata = { 
  id: "keyboard-open_rounded", 
  baseId: "keyboard-open", 
  variant: "rounded", 
  name: "Keyboard Open", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default KeyboardOpenRounded;
