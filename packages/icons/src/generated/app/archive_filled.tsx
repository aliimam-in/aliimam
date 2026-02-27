/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArchiveFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArchiveFilled = React.forwardRef<SVGSVGElement, ArchiveFilledProps>(
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
      <path d="M22 5V7C22 8.83 21.17 9.82 19.5 9.97C19.34 9.99 19.17 10 19 10H5C4.83 10 4.66 9.99 4.5 9.97C2.83 9.82 2 8.83 2 7V5C2 3 3 2 5 2H19C21 2 22 3 22 5Z" fill="currentColor"/>
<path d="M5.5 11.25C4.95 11.25 4.5 11.7 4.5 12.25V19C4.5 21 5 22 7.5 22H16.5C19 22 19.5 21 19.5 19V12.25C19.5 11.7 19.05 11.25 18.5 11.25H5.5ZM13.82 15.75H10.18C9.77 15.75 9.43 15.41 9.43 15C9.43 14.59 9.77 14.25 10.18 14.25H13.82C14.23 14.25 14.57 14.59 14.57 15C14.57 15.41 14.23 15.75 13.82 15.75Z" fill="currentColor"/>
    </svg>
  )
);
ArchiveFilled.displayName = "ArchiveFilled";
export const ArchiveFilledMetadata = { 
  id: "archive_filled", 
  baseId: "archive", 
  variant: "filled", 
  name: "Archive", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArchiveFilled;
