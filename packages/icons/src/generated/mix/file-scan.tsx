/**
 * Auto-generated logo component: File Scan (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileScanLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileScanLogo = React.forwardRef<SVGSVGElement, FileScanLogoProps>(
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
      <path d="M20 10V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4.35" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M16 14a2 2 0 0 0-2 2" />
  <path d="M16 22a2 2 0 0 1-2-2" />
  <path d="M20 14a2 2 0 0 1 2 2" />
  <path d="M20 22a2 2 0 0 0 2-2" />
    </svg>
  )
);

FileScanLogo.displayName = "FileScanLogo";

export const FileScanLogoMetadata = {
  id: "file-scan",
  baseId: "file-scan",
  variant: "default",
  name: "File Scan",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileScanLogo;
