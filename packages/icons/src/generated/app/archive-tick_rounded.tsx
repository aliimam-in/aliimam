/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArchiveTickRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArchiveTickRounded = React.forwardRef<SVGSVGElement, ArchiveTickRoundedProps>(
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
      <path d="M16.82 2H7.18001C5.05001 2 3.32001 3.74 3.32001 5.86V19.95C3.32001 21.75 4.61001 22.51 6.19001 21.64L11.07 18.93C11.59 18.64 12.43 18.64 12.94 18.93L17.82 21.64C19.4 22.52 20.69 21.76 20.69 19.95V5.86C20.68 3.74 18.95 2 16.82 2Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.59003 11L11.09 12.5L15.09 8.5"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ArchiveTickRounded.displayName = "ArchiveTickRounded";
export const ArchiveTickRoundedMetadata = { 
  id: "archive-tick_rounded", 
  baseId: "archive-tick", 
  variant: "rounded", 
  name: "Archive Tick", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArchiveTickRounded;
