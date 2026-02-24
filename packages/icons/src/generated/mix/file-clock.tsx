/**
 * Auto-generated logo component: File Clock (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileClockLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileClockLogo = React.forwardRef<SVGSVGElement, FileClockLogoProps>(
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
      <path d="M16 22h2a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v2.85" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M8 14v2.2l1.6 1" />
  <circle cx="8" cy="16" r="6" />
    </svg>
  )
);

FileClockLogo.displayName = "FileClockLogo";

export const FileClockLogoMetadata = {
  id: "file-clock",
  baseId: "file-clock",
  variant: "default",
  name: "File Clock",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileClockLogo;
