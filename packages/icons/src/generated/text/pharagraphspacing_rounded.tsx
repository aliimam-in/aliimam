/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PharagraphspacingRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PharagraphspacingRounded = React.forwardRef<SVGSVGElement, PharagraphspacingRoundedProps>(
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
      <path d="M3 22H21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 2H21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 6V18" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.8299 7.72L11.9999 4.89L9.16992 7.72" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.8299 15.89L11.9999 18.72L9.16992 15.89" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
PharagraphspacingRounded.displayName = "PharagraphspacingRounded";
export const PharagraphspacingRoundedMetadata = { 
  id: "pharagraphspacing_rounded", 
  baseId: "pharagraphspacing", 
  variant: "rounded", 
  name: "Pharagraphspacing", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PharagraphspacingRounded;
