/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DocumentForwardRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DocumentForwardRounded = React.forwardRef<SVGSVGElement, DocumentForwardRoundedProps>(
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
      <path d="M11 17L13 15L11 13L13 15H7" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
DocumentForwardRounded.displayName = "DocumentForwardRounded";
export const DocumentForwardRoundedMetadata = { 
  id: "document-forward_rounded", 
  baseId: "document-forward", 
  variant: "rounded", 
  name: "Document Forward", 
  category: "document", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DocumentForwardRounded;
