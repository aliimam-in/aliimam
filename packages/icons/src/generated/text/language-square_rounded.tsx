/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LanguageSquareRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LanguageSquareRounded = React.forwardRef<SVGSVGElement, LanguageSquareRoundedProps>(
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
      <path d="M16.99 8.96002H7.01001" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7.28003V8.96002" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 8.94C14.5 13.24 11.14 16.72 7 16.72" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.9999 16.72C15.1999 16.72 13.6 15.76 12.45 14.25" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
LanguageSquareRounded.displayName = "LanguageSquareRounded";
export const LanguageSquareRoundedMetadata = { 
  id: "language-square_rounded", 
  baseId: "language-square", 
  variant: "rounded", 
  name: "Language Square", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LanguageSquareRounded;
