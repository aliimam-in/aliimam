/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LanguageCircleRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LanguageCircleRounded = React.forwardRef<SVGSVGElement, LanguageCircleRoundedProps>(
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
      <path d="M16.99 8.96002H7.01001"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7.28003V8.96002"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 8.94C14.5 13.24 11.14 16.72 7 16.72"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.9999 16.72C15.1999 16.72 13.6 15.76 12.45 14.25"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
LanguageCircleRounded.displayName = "LanguageCircleRounded";
export const LanguageCircleRoundedMetadata = { 
  id: "language-circle_rounded", 
  baseId: "language-circle", 
  variant: "rounded", 
  name: "Language Circle", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LanguageCircleRounded;
