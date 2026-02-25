/**
 * Auto-generated logo component: File Symlink (default)
 * Category: file
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileSymlinkLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileSymlinkLogo = React.forwardRef<SVGSVGElement, FileSymlinkLogoProps>(
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
      <path d="M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="m10 18 3-3-3-3" />
    </svg>
  )
);

FileSymlinkLogo.displayName = "FileSymlinkLogo";

export const FileSymlinkLogoMetadata = {
  id: "file-symlink",
  baseId: "file-symlink",
  variant: "default",
  name: "File Symlink",
  category: "file",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileSymlinkLogo;
