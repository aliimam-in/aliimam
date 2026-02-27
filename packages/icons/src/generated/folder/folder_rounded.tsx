/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FolderRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FolderRounded = React.forwardRef<SVGSVGElement, FolderRoundedProps>(
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
      <path d="M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10"/>
    </svg>
  )
);
FolderRounded.displayName = "FolderRounded";
export const FolderRoundedMetadata = { 
  id: "folder_rounded", 
  baseId: "folder", 
  variant: "rounded", 
  name: "Folder", 
  category: "folder", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FolderRounded;
