/**
 * Auto-generated logo component: File Type (default)
 * Category: file
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileTypeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileTypeLogo = React.forwardRef<SVGSVGElement, FileTypeLogoProps>(
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
  <path d="M11 18h2" />
  <path d="M12 12v6" />
  <path d="M9 13v-.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v.5" />
    </svg>
  )
);

FileTypeLogo.displayName = "FileTypeLogo";

export const FileTypeLogoMetadata = {
  id: "file-type",
  baseId: "file-type",
  variant: "default",
  name: "File Type",
  category: "file",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileTypeLogo;
