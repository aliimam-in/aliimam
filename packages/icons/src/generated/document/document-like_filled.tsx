/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DocumentLikeFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DocumentLikeFilled = React.forwardRef<SVGSVGElement, DocumentLikeFilledProps>(
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
      <path d="M16 2H8C4.5 2 3 4 3 7V17C3 20 4.5 22 8 22H16C19.5 22 21 20 21 17V7C21 4 19.5 2 16 2ZM13.07 15.49C12.56 17.12 10.77 17.97 10.27 17.97C9.78 17.96 8.01 17.13 7.48 15.49C7.15 14.46 7.54 13.19 8.61 12.84C9.18 12.66 9.88 12.81 10.27 13.36C10.64 12.79 11.37 12.66 11.93 12.84C13.01 13.19 13.39 14.46 13.07 15.49ZM18.5 9.25H16.5C14.98 9.25 13.75 8.02 13.75 6.5V4.5C13.75 4.09 14.09 3.75 14.5 3.75C14.91 3.75 15.25 4.09 15.25 4.5V6.5C15.25 7.19 15.81 7.75 16.5 7.75H18.5C18.91 7.75 19.25 8.09 19.25 8.5C19.25 8.91 18.91 9.25 18.5 9.25Z" fill="currentColor"/>
    </svg>
  )
);
DocumentLikeFilled.displayName = "DocumentLikeFilled";
export const DocumentLikeFilledMetadata = { 
  id: "document-like_filled", 
  baseId: "document-like", 
  variant: "filled", 
  name: "Document Like", 
  category: "document", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DocumentLikeFilled;
