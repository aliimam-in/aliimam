/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface EmojiSadRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const EmojiSadRounded = React.forwardRef<SVGSVGElement, EmojiSadRoundedProps>(
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
      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 8.75C8 7.75 9.63 7.75 10.64 8.75"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.36 8.75C14.36 7.75 15.99 7.75 17 8.75"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.4 17.7H15.6C16.1 17.7 16.5 17.3 16.5 16.8C16.5 14.31 14.49 12.3 12 12.3C9.51 12.3 7.5 14.31 7.5 16.8C7.5 17.3 7.9 17.7 8.4 17.7Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
EmojiSadRounded.displayName = "EmojiSadRounded";
export const EmojiSadRoundedMetadata = { 
  id: "emoji-sad_rounded", 
  baseId: "emoji-sad", 
  variant: "rounded", 
  name: "Emoji Sad", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default EmojiSadRounded;
