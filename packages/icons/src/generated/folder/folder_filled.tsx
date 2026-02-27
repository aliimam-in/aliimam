/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FolderFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FolderFilled = React.forwardRef<SVGSVGElement, FolderFilledProps>(
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
      <path d="M21.0169 7.99175C21.4148 8.55833 20.9405 9.25 20.2482 9.25H3C2.44772 9.25 2 8.80228 2 8.25V6.42C2 3.98 3.98 2 6.42 2H8.74C10.37 2 10.88 2.53 11.53 3.4L12.93 5.26C13.24 5.67 13.28 5.72 13.86 5.72H16.65C18.4546 5.72 20.0516 6.61709 21.0169 7.99175Z" fill="currentColor"/>
<path d="M20.9834 10.7495C21.5343 10.7495 21.9815 11.1952 21.9834 11.7461L22 16.6498C22 19.5998 19.6 21.9998 16.65 21.9998H7.35C4.4 21.9998 2 19.5998 2 16.6498V11.7498C2 11.1975 2.44771 10.7498 2.99999 10.7498L20.9834 10.7495Z" fill="currentColor"/>
    </svg>
  )
);
FolderFilled.displayName = "FolderFilled";
export const FolderFilledMetadata = { 
  id: "folder_filled", 
  baseId: "folder", 
  variant: "filled", 
  name: "Folder", 
  category: "folder", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FolderFilled;
