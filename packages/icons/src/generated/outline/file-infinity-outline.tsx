/**
 * Auto-generated logo component: File Infinity Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileInfinityOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileInfinityOutlineLogo = React.forwardRef<SVGSVGElement, FileInfinityOutlineLogoProps>(
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
      <path d="M15.536 17.586a2.123 2.123 0 0 0 -2.929 0a1.951 1.951 0 0 0 0 2.828c.809 .781 2.12 .781 2.929 0c.809 -.781 -.805 .778 0 0l1.46 -1.41l1.46 -1.419" />
  <path d="M15.54 17.582l1.46 1.42l1.46 1.41c.809 .78 -.805 -.779 0 0s2.12 .781 2.929 0a1.951 1.951 0 0 0 0 -2.828a2.123 2.123 0 0 0 -2.929 0" />
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M9.5 21h-2.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v6" />
    </svg>
  )
);

FileInfinityOutlineLogo.displayName = "FileInfinityOutlineLogo";

export const FileInfinityOutlineLogoMetadata = {
  id: "file-infinity-outline",
  baseId: "file-infinity-outline",
  variant: "default",
  name: "File Infinity Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileInfinityOutlineLogo;
