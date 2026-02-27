/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FolderCloudRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FolderCloudRounded = React.forwardRef<SVGSVGElement, FolderCloudRoundedProps>(
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
      <path d="M9 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44001 10.9 3.20001L12.4 5.20001C12.78 5.70001 13 6 14 6H17C21 6 22 7 22 11V13" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.7601 18.32C11.4101 18.49 11.4101 21.89 13.7601 22.06H19.3201C19.9901 22.06 20.6501 21.81 21.1401 21.36C22.7901 19.92 21.91 17.04 19.74 16.77C18.96 12.08 12.1801 13.86 13.7801 18.33" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
FolderCloudRounded.displayName = "FolderCloudRounded";
export const FolderCloudRoundedMetadata = { 
  id: "folder-cloud_rounded", 
  baseId: "folder-cloud", 
  variant: "rounded", 
  name: "Folder Cloud", 
  category: "folder", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FolderCloudRounded;
