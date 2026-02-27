/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HappyemojiFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HappyemojiFilled = React.forwardRef<SVGSVGElement, HappyemojiFilledProps>(
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
      <path d="M11.97 2C6.45 2 1.97 6.48 1.97 12C1.97 17.52 6.45 22 11.97 22C17.49 22 21.97 17.52 21.97 12C21.97 6.48 17.5 2 11.97 2ZM17.4 16.43C16.17 18.2 14.15 19.25 12 19.25C9.85 19.25 7.83 18.2 6.6 16.43C6.36 16.09 6.45 15.62 6.79 15.39C7.13 15.15 7.6 15.24 7.83 15.58C8.78 16.94 10.34 17.76 12 17.76C13.66 17.76 15.22 16.95 16.17 15.58C16.41 15.24 16.87 15.16 17.21 15.39C17.56 15.62 17.64 16.09 17.4 16.43Z" fill="currentColor"/>
    </svg>
  )
);
HappyemojiFilled.displayName = "HappyemojiFilled";
export const HappyemojiFilledMetadata = { 
  id: "happyemoji_filled", 
  baseId: "happyemoji", 
  variant: "filled", 
  name: "Happyemoji", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default HappyemojiFilled;
