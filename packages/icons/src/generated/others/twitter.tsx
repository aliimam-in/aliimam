/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TwitterProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Twitter = React.forwardRef<SVGSVGElement, TwitterProps>(
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
);
Twitter.displayName = "Twitter";
export const TwitterMetadata = { 
  id: "twitter", 
  baseId: "twitter", 
  variant: "default", 
  name: "Twitter", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Twitter;
