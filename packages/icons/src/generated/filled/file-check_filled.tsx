/**
 * Auto-generated logo component: File Check (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileCheckFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileCheckFilledLogo = React.forwardRef<SVGSVGElement, FileCheckFilledLogoProps>(
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
      <path d="M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005zm3.707 10.293a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292a1 1 0 1 0 -1.414 1.414l2 2a1 1 0 0 0 1.414 0l4 -4a1 1 0 0 0 0 -1.414m-.707 -9.294l4 4.001h-4z" />
    </svg>
  )
);

FileCheckFilledLogo.displayName = "FileCheckFilledLogo";

export const FileCheckFilledLogoMetadata = {
  id: "file-check_filled",
  baseId: "file-check",
  variant: "filled",
  name: "File Check",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileCheckFilledLogo;
