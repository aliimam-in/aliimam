/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FileBadgeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FileBadge = React.forwardRef<SVGSVGElement, FileBadgeProps>(
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
      <path d="M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.3" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="m7.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.879.001l-1.846.85a.5.5 0 0 1-.692-.593l1.29-4.88" />
  <circle cx="6" cy="14" r="3" />
    </svg>
  )
);
FileBadge.displayName = "FileBadge";
export const FileBadgeMetadata = { 
  id: "file-badge", 
  baseId: "file-badge", 
  variant: "default", 
  name: "File Badge", 
  category: "file", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FileBadge;
