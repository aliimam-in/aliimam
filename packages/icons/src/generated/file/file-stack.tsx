/**
 * Auto-generated logo component: File Stack (default)
 * Category: file
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileStackLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileStackLogo = React.forwardRef<SVGSVGElement, FileStackLogoProps>(
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
      <path d="M11 21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1" />
  <path d="M16 16a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1" />
  <path d="M21 6a2 2 0 0 0-.586-1.414l-2-2A2 2 0 0 0 17 2h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1z" />
    </svg>
  )
);

FileStackLogo.displayName = "FileStackLogo";

export const FileStackLogoMetadata = {
  id: "file-stack",
  baseId: "file-stack",
  variant: "default",
  name: "File Stack",
  category: "file",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileStackLogo;
