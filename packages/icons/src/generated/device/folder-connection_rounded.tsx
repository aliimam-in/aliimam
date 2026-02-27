/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FolderConnectionRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FolderConnectionRounded = React.forwardRef<SVGSVGElement, FolderConnectionRoundedProps>(
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
      <path d="M12 16V19" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 23C13.1046 23 14 22.1046 14 21C14 19.8954 13.1046 19 12 19C10.8954 19 10 19.8954 10 21C10 22.1046 10.8954 23 12 23Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 21H14" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 21H6" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 8.30005V12.5C19 15.3 18.3 16 15.5 16H8.5C5.7 16 5 15.3 5 12.5V5.5C5 2.7 5.7 2 8.5 2H9.54999C10.6 2 10.83 2.30997 11.23 2.83997L12.28 4.23999C12.55 4.58999 12.7 4.80005 13.4 4.80005H15.5C18.3 4.80005 19 5.50005 19 8.30005Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10"/>
    </svg>
  )
);
FolderConnectionRounded.displayName = "FolderConnectionRounded";
export const FolderConnectionRoundedMetadata = { 
  id: "folder-connection_rounded", 
  baseId: "folder-connection", 
  variant: "rounded", 
  name: "Folder Connection", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FolderConnectionRounded;
