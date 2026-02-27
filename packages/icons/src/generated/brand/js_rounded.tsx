/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface JsRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const JsRounded = React.forwardRef<SVGSVGElement, JsRoundedProps>(
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
      <path d="M9 9.00002V16.9C9 18.4 7.4 19.4 6 18.6L3.5 17.2C3.2 17.1 3 16.8 3 16.4V7.60002C3 7.20002 3.2 6.90002 3.5 6.70002L11.5 2.30002C11.8 2.10002 12.2 2.10002 12.5 2.30002L20.5 6.70002C20.8 6.90002 21 7.20002 21 7.60002V16.4C21 16.8 20.8 17.1 20.5 17.3L12.5 21.7C12.2 21.9 11.8 21.9 11.5 21.7L10 21"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 10.8C17 9.8 16.2 9 15.3 9H13.5C12.5 9 11.8 9.8 11.8 10.7C11.8 11.7 12.6 12.4 13.5 12.4H15.3C16.3 12.4 17 13.2 17 14.1C17 15.1 16.2 15.8 15.3 15.8H13.5C12.5 15.8 11.8 15 11.8 14.1"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
JsRounded.displayName = "JsRounded";
export const JsRoundedMetadata = { 
  id: "js_rounded", 
  baseId: "js", 
  variant: "rounded", 
  name: "Js", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default JsRounded;
