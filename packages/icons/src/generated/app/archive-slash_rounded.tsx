/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArchiveSlashRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArchiveSlashRounded = React.forwardRef<SVGSVGElement, ArchiveSlashRoundedProps>(
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
      <path d="M22 2L2 22"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.68 8.71001V19.71C20.68 21.72 19.24 22.57 17.48 21.59L11 17.54"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.31995 19.95V5.86C3.31995 3.74 5.04995 2 7.17995 2H16.8299C18.0399 2 19.1199 2.56 19.8299 3.44"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ArchiveSlashRounded.displayName = "ArchiveSlashRounded";
export const ArchiveSlashRoundedMetadata = { 
  id: "archive-slash_rounded", 
  baseId: "archive-slash", 
  variant: "rounded", 
  name: "Archive Slash", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArchiveSlashRounded;
