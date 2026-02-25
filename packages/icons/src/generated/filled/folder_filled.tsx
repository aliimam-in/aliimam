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
      <path d="M9 3a1 1 0 0 1 .608 .206l.1 .087l2.706 2.707h6.586a3 3 0 0 1 2.995 2.824l.005 .176v8a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-11a3 3 0 0 1 2.824 -2.995l.176 -.005h4z" />
    </svg>
  )
);
FolderFilled.displayName = "FolderFilled";
export const FolderFilledMetadata = { 
  id: "folder_filled", 
  baseId: "folder", 
  variant: "filled", 
  name: "Folder", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FolderFilled;
