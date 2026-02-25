/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FolderClockProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FolderClock = React.forwardRef<SVGSVGElement, FolderClockProps>(
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
      <path d="M16 14v2.2l1.6 1" />
  <path d="M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2" />
  <circle cx="16" cy="16" r="6" />
    </svg>
  )
);
FolderClock.displayName = "FolderClock";
export const FolderClockMetadata = { 
  id: "folder-clock", 
  baseId: "folder-clock", 
  variant: "default", 
  name: "Folder Clock", 
  category: "folder", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FolderClock;
