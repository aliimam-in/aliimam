/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface QuoteDownCircleRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const QuoteDownCircleRounded = React.forwardRef<SVGSVGElement, QuoteDownCircleRoundedProps>(
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
      <path d="M7 12.16H9.67999C10.39 12.16 10.87 12.7 10.87 13.35V14.84C10.87 15.49 10.39 16.03 9.67999 16.03H8.19C7.54 16.03 7 15.49 7 14.84V12.16Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 12.16C7 9.36997 7.52 8.89997 9.09 7.96997" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.1399 12.16H15.8199C16.5299 12.16 17.0099 12.7 17.0099 13.35V14.84C17.0099 15.49 16.5299 16.03 15.8199 16.03H14.3299C13.6799 16.03 13.1399 15.49 13.1399 14.84V12.16Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.1399 12.16C13.1399 9.36997 13.6599 8.89997 15.2299 7.96997" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
QuoteDownCircleRounded.displayName = "QuoteDownCircleRounded";
export const QuoteDownCircleRoundedMetadata = { 
  id: "quote-down-circle_rounded", 
  baseId: "quote-down-circle", 
  variant: "rounded", 
  name: "Quote Down Circle", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default QuoteDownCircleRounded;
