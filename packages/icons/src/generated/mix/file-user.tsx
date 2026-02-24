/**
 * Auto-generated logo component: File User (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileUserLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileUserLogo = React.forwardRef<SVGSVGElement, FileUserLogoProps>(
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
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M16 22a4 4 0 0 0-8 0" />
  <circle cx="12" cy="15" r="3" />
    </svg>
  )
);

FileUserLogo.displayName = "FileUserLogo";

export const FileUserLogoMetadata = {
  id: "file-user",
  baseId: "file-user",
  variant: "default",
  name: "File User",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileUserLogo;
