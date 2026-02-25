/**
 * Auto-generated logo component: File Scissors Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileScissorsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileScissorsOutlineLogo = React.forwardRef<SVGSVGElement, FileScissorsOutlineLogoProps>(
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
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
  <path d="M14 17a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M8 17a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M9 17l6 -6" />
  <path d="M15 17l-6 -6" />
    </svg>
  )
);

FileScissorsOutlineLogo.displayName = "FileScissorsOutlineLogo";

export const FileScissorsOutlineLogoMetadata = {
  id: "file-scissors-outline",
  baseId: "file-scissors-outline",
  variant: "default",
  name: "File Scissors Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileScissorsOutlineLogo;
