/**
 * Auto-generated logo component: File Braces Corner (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileBracesCornerLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileBracesCornerLogo = React.forwardRef<SVGSVGElement, FileBracesCornerLogoProps>(
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
      <path d="M14 22h4a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M5 14a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1 1 1 0 0 1 1 1v2a1 1 0 0 0 1 1" />
  <path d="M9 22a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1" />
    </svg>
  )
);

FileBracesCornerLogo.displayName = "FileBracesCornerLogo";

export const FileBracesCornerLogoMetadata = {
  id: "file-braces-corner",
  baseId: "file-braces-corner",
  variant: "default",
  name: "File Braces Corner",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileBracesCornerLogo;
