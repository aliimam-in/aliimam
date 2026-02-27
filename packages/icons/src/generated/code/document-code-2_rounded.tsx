/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DocumentCode2RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DocumentCode2Rounded = React.forwardRef<SVGSVGElement, DocumentCode2RoundedProps>(
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
      <path d="M11 22H16C19.5 22 21 20 21 17V7C21 4 19.5 2 16 2H8C4.5 2 3 4 3 7V14" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 17L2 19L4 21" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 17L9 19L7 21" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
DocumentCode2Rounded.displayName = "DocumentCode2Rounded";
export const DocumentCode2RoundedMetadata = { 
  id: "document-code-2_rounded", 
  baseId: "document-code-2", 
  variant: "rounded", 
  name: "Document Code 2", 
  category: "code", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DocumentCode2Rounded;
