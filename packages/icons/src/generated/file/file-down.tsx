/**
 * Auto-generated logo component: File Down (default)
 * Category: file
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileDownLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileDownLogo = React.forwardRef<SVGSVGElement, FileDownLogoProps>(
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
  <path d="M12 18v-6" />
  <path d="m9 15 3 3 3-3" />
    </svg>
  )
);

FileDownLogo.displayName = "FileDownLogo";

export const FileDownLogoMetadata = {
  id: "file-down",
  baseId: "file-down",
  variant: "default",
  name: "File Down",
  category: "file",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileDownLogo;
