/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface EmojiNormalRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const EmojiNormalRounded = React.forwardRef<SVGSVGElement, EmojiNormalRoundedProps>(
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
<path d="M7 8.25C8 9.25 9.63 9.25 10.64 8.25"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.36 8.25C14.36 9.25 15.99 9.25 17 8.25"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.4 13H15.6C16.1 13 16.5 13.4 16.5 13.9C16.5 16.39 14.49 18.4 12 18.4C9.51 18.4 7.5 16.39 7.5 13.9C7.5 13.4 7.9 13 8.4 13Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
EmojiNormalRounded.displayName = "EmojiNormalRounded";
export const EmojiNormalRoundedMetadata = { 
  id: "emoji-normal_rounded", 
  baseId: "emoji-normal", 
  variant: "rounded", 
  name: "Emoji Normal", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default EmojiNormalRounded;
