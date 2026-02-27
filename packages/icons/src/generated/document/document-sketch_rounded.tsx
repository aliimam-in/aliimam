/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DocumentSketchRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DocumentSketchRounded = React.forwardRef<SVGSVGElement, DocumentSketchRoundedProps>(
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
      <path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 10H18C15 10 14 9 14 6V2L22 10Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M8.32 12H10.97C11.24 12 11.58 12.18 11.72 12.4L12.85 14.1C13.08 14.44 13.03 14.95 12.74 15.24L10.28 17.7C9.93 18.05 9.35 18.05 9 17.7L6.54 15.24C6.25 14.95 6.2 14.44 6.43 14.1L7.56 12.4C7.72 12.18 8.06 12 8.32 12Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
DocumentSketchRounded.displayName = "DocumentSketchRounded";
export const DocumentSketchRoundedMetadata = { 
  id: "document-sketch_rounded", 
  baseId: "document-sketch", 
  variant: "rounded", 
  name: "Document Sketch", 
  category: "document", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DocumentSketchRounded;
