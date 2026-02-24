/**
 * Auto-generated logo component: File X Corner (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileXCornerLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileXCornerLogo = React.forwardRef<SVGSVGElement, FileXCornerLogoProps>(
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
      <path d="M11 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="m15 17 5 5" />
  <path d="m20 17-5 5" />
    </svg>
  )
);

FileXCornerLogo.displayName = "FileXCornerLogo";

export const FileXCornerLogoMetadata = {
  id: "file-x-corner",
  baseId: "file-x-corner",
  variant: "default",
  name: "File X Corner",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileXCornerLogo;
