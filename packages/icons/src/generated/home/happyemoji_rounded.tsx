/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HappyemojiRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HappyemojiRounded = React.forwardRef<SVGSVGElement, HappyemojiRoundedProps>(
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
      <path d="M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44715 2 1.97 6.47715 1.97 12C1.97 17.5228 6.44715 22 11.97 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.20999 16C8.25999 17.51 10.02 18.5 12 18.5C13.98 18.5 15.73 17.51 16.79 16" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
HappyemojiRounded.displayName = "HappyemojiRounded";
export const HappyemojiRoundedMetadata = { 
  id: "happyemoji_rounded", 
  baseId: "happyemoji", 
  variant: "rounded", 
  name: "Happyemoji", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default HappyemojiRounded;
