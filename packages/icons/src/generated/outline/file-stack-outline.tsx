/**
 * Auto-generated logo component: File Stack Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileStackOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileStackOutlineLogo = React.forwardRef<SVGSVGElement, FileStackOutlineLogoProps>(
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
  <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
  <path d="M5 21h14" />
  <path d="M5 18h14" />
  <path d="M5 15h14" />
    </svg>
  )
);

FileStackOutlineLogo.displayName = "FileStackOutlineLogo";

export const FileStackOutlineLogoMetadata = {
  id: "file-stack-outline",
  baseId: "file-stack-outline",
  variant: "default",
  name: "File Stack Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileStackOutlineLogo;
