/**
 * Auto-generated logo component: File (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileLogo = React.forwardRef<SVGSVGElement, FileLogoProps>(
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
      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/>
    </svg>
  )
);

FileLogo.displayName = "FileLogo";

export const FileLogoMetadata = {
  id: "file",
  baseId: "file",
  variant: "default",
  name: "File",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileLogo;
