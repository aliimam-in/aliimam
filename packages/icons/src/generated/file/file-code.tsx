/**
 * Auto-generated logo component: File Code (default)
 * Category: file
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileCodeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileCodeLogo = React.forwardRef<SVGSVGElement, FileCodeLogoProps>(
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
  <path d="M10 12.5 8 15l2 2.5" />
  <path d="m14 12.5 2 2.5-2 2.5" />
    </svg>
  )
);

FileCodeLogo.displayName = "FileCodeLogo";

export const FileCodeLogoMetadata = {
  id: "file-code",
  baseId: "file-code",
  variant: "default",
  name: "File Code",
  category: "file",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileCodeLogo;
