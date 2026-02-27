/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DocumentCopyRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DocumentCopyRounded = React.forwardRef<SVGSVGElement, DocumentCopyRoundedProps>(
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
      <path d="M17 13.4V16.4C17 20.4 15.4 22 11.4 22H7.6C3.6 22 2 20.4 2 16.4V12.6C2 8.6 3.6 7 7.6 7H10.6"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 13.4H13.8C11.4 13.4 10.6 12.6 10.6 10.2V7L17 13.4Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.6 2H15.6"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 5C7 3.34 8.34 2 10 2H12.62"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 8V14.19C22 15.74 20.74 17 19.19 17"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 8H19C16.75 8 16 7.25 16 5V2L22 8Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
DocumentCopyRounded.displayName = "DocumentCopyRounded";
export const DocumentCopyRoundedMetadata = { 
  id: "document-copy_rounded", 
  baseId: "document-copy", 
  variant: "rounded", 
  name: "Document Copy", 
  category: "document", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DocumentCopyRounded;
