/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface QuoteDownRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const QuoteDownRounded = React.forwardRef<SVGSVGElement, QuoteDownRoundedProps>(
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
      <path d="M21.9999 11.65H16.1999C14.6699 11.65 13.6199 10.49 13.6199 9.07001V5.84998C13.6199 4.42998 14.6699 3.27002 16.1999 3.27002H19.4199C20.8399 3.27002 21.9999 4.42998 21.9999 5.84998V11.65Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 11.65C22 17.7 20.87 18.7 17.47 20.72" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.37 11.65H4.56999C3.03999 11.65 1.98999 10.49 1.98999 9.07001V5.84998C1.98999 4.42998 3.03999 3.27002 4.56999 3.27002H7.79999C9.21999 3.27002 10.38 4.42998 10.38 5.84998V11.65" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.3701 11.65C10.3701 17.7 9.24009 18.7 5.84009 20.72" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
QuoteDownRounded.displayName = "QuoteDownRounded";
export const QuoteDownRoundedMetadata = { 
  id: "quote-down_rounded", 
  baseId: "quote-down", 
  variant: "rounded", 
  name: "Quote Down", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default QuoteDownRounded;
