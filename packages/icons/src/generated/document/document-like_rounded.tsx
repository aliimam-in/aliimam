/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DocumentLikeRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DocumentLikeRounded = React.forwardRef<SVGSVGElement, DocumentLikeRoundedProps>(
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
      <path d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.48002 15.49C7.15002 14.46 7.53999 13.19 8.60999 12.84C9.17999 12.66 9.87999 12.81 10.27 13.36C10.64 12.79 11.37 12.66 11.93 12.84C13.01 13.19 13.39 14.46 13.07 15.49C12.56 17.12 10.77 17.9699 10.27 17.9699C9.77999 17.9599 8.01002 17.13 7.48002 15.49Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
DocumentLikeRounded.displayName = "DocumentLikeRounded";
export const DocumentLikeRoundedMetadata = { 
  id: "document-like_rounded", 
  baseId: "document-like", 
  variant: "rounded", 
  name: "Document Like", 
  category: "document", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DocumentLikeRounded;
