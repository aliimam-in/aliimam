/**
 * Auto-generated logo component: File Orientation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileOrientationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileOrientationOutlineLogo = React.forwardRef<SVGSVGElement, FileOrientationOutlineLogoProps>(
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
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M10 21h-3a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v2" />
  <path d="M13 20h5a2 2 0 0 0 2 -2v-5" />
  <path d="M15 22l-2 -2l2 -2" />
  <path d="M18 15l2 -2l2 2" />
    </svg>
  )
);

FileOrientationOutlineLogo.displayName = "FileOrientationOutlineLogo";

export const FileOrientationOutlineLogoMetadata = {
  id: "file-orientation-outline",
  baseId: "file-orientation-outline",
  variant: "default",
  name: "File Orientation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileOrientationOutlineLogo;
