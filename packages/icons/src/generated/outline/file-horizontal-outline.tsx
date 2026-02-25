/**
 * Auto-generated logo component: File Horizontal Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileHorizontalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileHorizontalOutlineLogo = React.forwardRef<SVGSVGElement, FileHorizontalOutlineLogoProps>(
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
      <path d="M16 5v4a1 1 0 0 0 1 1h4" />
  <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-7l-5 -5h-11a2 2 0 0 0 -2 2" />
    </svg>
  )
);

FileHorizontalOutlineLogo.displayName = "FileHorizontalOutlineLogo";

export const FileHorizontalOutlineLogoMetadata = {
  id: "file-horizontal-outline",
  baseId: "file-horizontal-outline",
  variant: "default",
  name: "File Horizontal Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileHorizontalOutlineLogo;
