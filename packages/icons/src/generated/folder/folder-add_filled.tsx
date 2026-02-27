/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FolderAddFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FolderAddFilled = React.forwardRef<SVGSVGElement, FolderAddFilledProps>(
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
<path d="M21.9834 11.7461C21.9815 11.1952 21.5343 10.7495 20.9834 10.7495L2.99998 10.7498C2.44771 10.7499 2 11.1976 2 11.7498V16.6499C2 19.5999 4.4 21.9999 7.35 21.9999H16.65C19.6 21.9999 22 19.5999 22 16.6499L21.9834 11.7461ZM14.5 16.7499H12.81V18.4999C12.81 18.9099 12.47 19.2499 12.06 19.2499C11.64 19.2499 11.31 18.9099 11.31 18.4999V16.7499H9.5C9.09 16.7499 8.75 16.4099 8.75 15.9999C8.75 15.5899 9.09 15.2499 9.5 15.2499H11.31V13.4999C11.31 13.0899 11.64 12.7499 12.06 12.7499C12.47 12.7499 12.81 13.0899 12.81 13.4999V15.2499H14.5C14.91 15.2499 15.25 15.5899 15.25 15.9999C15.25 16.4099 14.91 16.7499 14.5 16.7499Z" fill="currentColor"/>
    </svg>
  )
);
FolderAddFilled.displayName = "FolderAddFilled";
export const FolderAddFilledMetadata = { 
  id: "folder-add_filled", 
  baseId: "folder-add", 
  variant: "filled", 
  name: "Folder Add", 
  category: "folder", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FolderAddFilled;
