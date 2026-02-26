/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArchiveRestoreProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArchiveRestore = React.forwardRef<SVGSVGElement, ArchiveRestoreProps>(
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
      <rect width="20" height="5" x="2" y="3" rx="1" />
  <path d="M4 8v11a2 2 0 0 0 2 2h2" />
  <path d="M20 8v11a2 2 0 0 1-2 2h-2" />
  <path d="m9 15 3-3 3 3" />
  <path d="M12 12v9" />
    </svg>
  )
);
ArchiveRestore.displayName = "ArchiveRestore";
export const ArchiveRestoreMetadata = { 
  id: "archive-restore", 
  baseId: "archive-restore", 
  variant: "default", 
  name: "Archive Restore", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArchiveRestore;
