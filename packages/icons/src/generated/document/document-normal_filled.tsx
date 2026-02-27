/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DocumentNormalFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DocumentNormalFilled = React.forwardRef<SVGSVGElement, DocumentNormalFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M20.71 8.11998V17.53C20.71 19.99 18.7 22 16.24 22H7.75998C5.29998 22 3.28998 19.99 3.28998 17.53V8.11998C3.28998 6.40998 4.24998 4.91998 5.65998 4.16998C6.14998 3.90998 6.75998 4.25998 6.75998 4.81998C6.75998 6.40998 8.05998 7.70998 9.64998 7.70998H14.35C15.94 7.70998 17.24 6.40998 17.24 4.81998C17.24 4.25998 17.84 3.90998 18.34 4.16998C19.75 4.91998 20.71 6.40998 20.71 8.11998Z" fill="currentColor"/>
<path d="M14.35 2H9.65001C8.61001 2 7.76001 2.84 7.76001 3.88V4.82C7.76001 5.86 8.60001 6.7 9.64001 6.7H14.35C15.39 6.7 16.23 5.86 16.23 4.82V3.88C16.24 2.84 15.39 2 14.35 2Z" fill="currentColor"/>
    </svg>
  )
);
DocumentNormalFilled.displayName = "DocumentNormalFilled";
export const DocumentNormalFilledMetadata = { 
  id: "document-normal_filled", 
  baseId: "document-normal", 
  variant: "filled", 
  name: "Document Normal", 
  category: "document", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DocumentNormalFilled;
