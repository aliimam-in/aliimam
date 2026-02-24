/**
 * Auto-generated logo component: File Search Corner (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileSearchCornerLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileSearchCornerLogo = React.forwardRef<SVGSVGElement, FileSearchCornerLogoProps>(
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
      <path d="M11.1 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.589 3.588A2.4 2.4 0 0 1 20 8v3.25" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="m21 22-2.88-2.88" />
  <circle cx="16" cy="17" r="3" />
    </svg>
  )
);

FileSearchCornerLogo.displayName = "FileSearchCornerLogo";

export const FileSearchCornerLogoMetadata = {
  id: "file-search-corner",
  baseId: "file-search-corner",
  variant: "default",
  name: "File Search Corner",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileSearchCornerLogo;
