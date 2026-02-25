/**
 * Auto-generated logo component: File Exclamation Point (default)
 * Category: file
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileExclamationPointLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileExclamationPointLogo = React.forwardRef<SVGSVGElement, FileExclamationPointLogoProps>(
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
  <path d="M12 9v4" />
  <path d="M12 17h.01" />
    </svg>
  )
);

FileExclamationPointLogo.displayName = "FileExclamationPointLogo";

export const FileExclamationPointLogoMetadata = {
  id: "file-exclamation-point",
  baseId: "file-exclamation-point",
  variant: "default",
  name: "File Exclamation Point",
  category: "file",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileExclamationPointLogo;
