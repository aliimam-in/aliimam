/**
 * Auto-generated logo component: File Symlink Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileSymlinkOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileSymlinkOutlineLogo = React.forwardRef<SVGSVGElement, FileSymlinkOutlineLogoProps>(
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
      <path d="M4 21v-4a3 3 0 0 1 3 -3h5" />
  <path d="M9 17l3 -3l-3 -3" />
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M5 11v-6a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-9.5" />
    </svg>
  )
);

FileSymlinkOutlineLogo.displayName = "FileSymlinkOutlineLogo";

export const FileSymlinkOutlineLogoMetadata = {
  id: "file-symlink-outline",
  baseId: "file-symlink-outline",
  variant: "default",
  name: "File Symlink Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileSymlinkOutlineLogo;
