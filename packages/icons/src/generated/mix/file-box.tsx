/**
 * Auto-generated logo component: File Box (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileBoxLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileBoxLogo = React.forwardRef<SVGSVGElement, FileBoxLogoProps>(
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
      <path d="M14.5 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.8" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M11.7 14.2 7 17l-4.7-2.8" />
  <path d="M3 13.1a2 2 0 0 0-.999 1.76v3.24a2 2 0 0 0 .969 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01z" />
  <path d="M7 17v5" />
    </svg>
  )
);

FileBoxLogo.displayName = "FileBoxLogo";

export const FileBoxLogoMetadata = {
  id: "file-box",
  baseId: "file-box",
  variant: "default",
  name: "File Box",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileBoxLogo;
