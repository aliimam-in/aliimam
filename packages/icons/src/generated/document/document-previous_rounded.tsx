/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DocumentPreviousRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DocumentPreviousRounded = React.forwardRef<SVGSVGElement, DocumentPreviousRoundedProps>(
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
      <path d="M13 15H7L9 17"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 15L9 13"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 10H18C15 10 14 9 14 6V2L18 6L22 10Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
DocumentPreviousRounded.displayName = "DocumentPreviousRounded";
export const DocumentPreviousRoundedMetadata = { 
  id: "document-previous_rounded", 
  baseId: "document-previous", 
  variant: "rounded", 
  name: "Document Previous", 
  category: "document", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DocumentPreviousRounded;
