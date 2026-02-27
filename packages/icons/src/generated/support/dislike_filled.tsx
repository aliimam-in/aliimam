/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DislikeFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DislikeFilled = React.forwardRef<SVGSVGElement, DislikeFilledProps>(
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
      <path d="M15.61 5.50002V15.66C15.61 16.06 15.49 16.45 15.27 16.78L12.54 20.84C12.11 21.49 11.04 21.95 10.13 21.61C9.14998 21.28 8.49999 20.18 8.70999 19.2L9.22998 15.93C9.26998 15.63 9.18999 15.36 9.01999 15.15C8.84999 14.96 8.59999 14.84 8.32999 14.84H4.21998C3.42998 14.84 2.74998 14.52 2.34999 13.96C1.96999 13.42 1.89999 12.72 2.14999 12.01L4.60999 4.52002C4.91999 3.28002 6.26999 2.27002 7.60999 2.27002H11.51C12.18 2.27002 13.12 2.50002 13.55 2.93002L14.83 3.92002C15.32 4.30002 15.61 4.88002 15.61 5.50002Z" fill="currentColor"/>
<path d="M18.79 17.6099H19.82C21.37 17.6099 22 17.0099 22 15.5299V5.4799C22 3.9999 21.37 3.3999 19.82 3.3999H18.79C17.24 3.3999 16.61 3.9999 16.61 5.4799V15.5399C16.61 17.0099 17.24 17.6099 18.79 17.6099Z" fill="currentColor"/>
    </svg>
  )
);
DislikeFilled.displayName = "DislikeFilled";
export const DislikeFilledMetadata = { 
  id: "dislike_filled", 
  baseId: "dislike", 
  variant: "filled", 
  name: "Dislike", 
  category: "support", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DislikeFilled;
