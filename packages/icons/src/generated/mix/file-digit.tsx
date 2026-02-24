/**
 * Auto-generated logo component: File Digit (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileDigitLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileDigitLogo = React.forwardRef<SVGSVGElement, FileDigitLogoProps>(
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
      <path d="M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 16h2v6" />
  <path d="M10 22h4" />
  <rect x="2" y="16" width="4" height="6" rx="2" />
    </svg>
  )
);

FileDigitLogo.displayName = "FileDigitLogo";

export const FileDigitLogoMetadata = {
  id: "file-digit",
  baseId: "file-digit",
  variant: "default",
  name: "File Digit",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileDigitLogo;
