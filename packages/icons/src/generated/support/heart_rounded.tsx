/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HeartRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HeartRounded = React.forwardRef<SVGSVGElement, HeartRoundedProps>(
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
      <path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
HeartRounded.displayName = "HeartRounded";
export const HeartRoundedMetadata = { 
  id: "heart_rounded", 
  baseId: "heart", 
  variant: "rounded", 
  name: "Heart", 
  category: "support", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default HeartRounded;
