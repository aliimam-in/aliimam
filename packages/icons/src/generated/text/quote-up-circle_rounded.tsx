/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface QuoteUpCircleRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const QuoteUpCircleRounded = React.forwardRef<SVGSVGElement, QuoteUpCircleRoundedProps>(
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
      <path d="M16.9999 11.84H14.3199C13.6099 11.84 13.1299 11.3 13.1299 10.65V9.15997C13.1299 8.50997 13.6099 7.96997 14.3199 7.96997H15.8099C16.4599 7.96997 16.9999 8.50997 16.9999 9.15997V11.84Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.9999 11.84C16.9999 14.63 16.4799 15.1 14.9099 16.03"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.86 11.84H8.17998C7.46998 11.84 6.98999 11.3 6.98999 10.65V9.15997C6.98999 8.50997 7.46998 7.96997 8.17998 7.96997H9.66998C10.32 7.96997 10.86 8.50997 10.86 9.15997V11.84Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.86 11.84C10.86 14.63 10.34 15.1 8.77002 16.03"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
QuoteUpCircleRounded.displayName = "QuoteUpCircleRounded";
export const QuoteUpCircleRoundedMetadata = { 
  id: "quote-up-circle_rounded", 
  baseId: "quote-up-circle", 
  variant: "rounded", 
  name: "Quote Up Circle", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default QuoteUpCircleRounded;
