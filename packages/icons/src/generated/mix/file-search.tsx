/**
 * Auto-generated logo component: File Search (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileSearchLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileSearchLogo = React.forwardRef<SVGSVGElement, FileSearchLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <circle cx="11.5" cy="14.5" r="2.5" />
  <path d="M13.3 16.3 15 18" />
    </svg>
  )
);

FileSearchLogo.displayName = "FileSearchLogo";

export const FileSearchLogoMetadata = {
  id: "file-search",
  baseId: "file-search",
  variant: "default",
  name: "File Search",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileSearchLogo;
