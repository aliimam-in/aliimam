/**
 * Auto-generated logo component: File Key (default)
 * Category: file
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileKeyLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileKeyLogo = React.forwardRef<SVGSVGElement, FileKeyLogoProps>(
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
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M4 12v6" />
  <path d="M4 14h2" />
  <path d="M9.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v4" />
  <circle cx="4" cy="20" r="2" />
    </svg>
  )
);

FileKeyLogo.displayName = "FileKeyLogo";

export const FileKeyLogoMetadata = {
  id: "file-key",
  baseId: "file-key",
  variant: "default",
  name: "File Key",
  category: "file",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileKeyLogo;
