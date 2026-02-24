/**
 * Auto-generated logo component: File Code Corner (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileCodeCornerLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileCodeCornerLogo = React.forwardRef<SVGSVGElement, FileCodeCornerLogoProps>(
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
      <path d="M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="m5 16-3 3 3 3" />
  <path d="m9 22 3-3-3-3" />
    </svg>
  )
);

FileCodeCornerLogo.displayName = "FileCodeCornerLogo";

export const FileCodeCornerLogoMetadata = {
  id: "file-code-corner",
  baseId: "file-code-corner",
  variant: "default",
  name: "File Code Corner",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileCodeCornerLogo;
