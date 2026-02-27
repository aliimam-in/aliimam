/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FolderCrossRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FolderCrossRounded = React.forwardRef<SVGSVGElement, FolderCrossRoundedProps>(
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
      <path d="M13.81 15.73L10.27 12.19"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.77 12.23L10.23 15.77"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z"   strokeMiterlimit="10"/>
    </svg>
  )
);
FolderCrossRounded.displayName = "FolderCrossRounded";
export const FolderCrossRoundedMetadata = { 
  id: "folder-cross_rounded", 
  baseId: "folder-cross", 
  variant: "rounded", 
  name: "Folder Cross", 
  category: "folder", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FolderCrossRounded;
