/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SmsSearchRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SmsSearchRounded = React.forwardRef<SVGSVGElement, SmsSearchRoundedProps>(
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
      <path d="M12 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V11.5"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 22L21 21"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
SmsSearchRounded.displayName = "SmsSearchRounded";
export const SmsSearchRoundedMetadata = { 
  id: "sms-search_rounded", 
  baseId: "sms-search", 
  variant: "rounded", 
  name: "Sms Search", 
  category: "message", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SmsSearchRounded;
