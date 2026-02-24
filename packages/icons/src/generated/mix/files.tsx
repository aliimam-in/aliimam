/**
 * Auto-generated logo component: Files (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FilesLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FilesLogo = React.forwardRef<SVGSVGElement, FilesLogoProps>(
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
      <path d="M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" />
  <path d="M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z" />
  <path d="M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1" />
    </svg>
  )
);

FilesLogo.displayName = "FilesLogo";

export const FilesLogoMetadata = {
  id: "files",
  baseId: "files",
  variant: "default",
  name: "Files",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FilesLogo;
