/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface QuoteUpRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const QuoteUpRounded = React.forwardRef<SVGSVGElement, QuoteUpRoundedProps>(
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
      <path d="M2 12.35H7.79999C9.32999 12.35 10.38 13.51 10.38 14.93V18.15C10.38 19.57 9.32999 20.73 7.79999 20.73H4.58002C3.16002 20.73 2 19.57 2 18.15V12.35"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 12.35C2 6.29998 3.13003 5.30003 6.53003 3.28003"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.6299 12.35H19.4299C20.9599 12.35 22.0099 13.51 22.0099 14.93V18.15C22.0099 19.57 20.9599 20.73 19.4299 20.73H16.2099C14.7899 20.73 13.6299 19.57 13.6299 18.15V12.35"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.6299 12.35C13.6299 6.29998 14.7599 5.30003 18.1599 3.28003"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
QuoteUpRounded.displayName = "QuoteUpRounded";
export const QuoteUpRoundedMetadata = { 
  id: "quote-up_rounded", 
  baseId: "quote-up", 
  variant: "rounded", 
  name: "Quote Up", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default QuoteUpRounded;
