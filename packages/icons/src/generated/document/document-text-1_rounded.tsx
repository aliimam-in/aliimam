/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DocumentText1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DocumentText1Rounded = React.forwardRef<SVGSVGElement, DocumentText1RoundedProps>(
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
      <path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 13H13" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 17H11" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
DocumentText1Rounded.displayName = "DocumentText1Rounded";
export const DocumentText1RoundedMetadata = { 
  id: "document-text-1_rounded", 
  baseId: "document-text-1", 
  variant: "rounded", 
  name: "Document Text 1", 
  category: "document", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DocumentText1Rounded;
