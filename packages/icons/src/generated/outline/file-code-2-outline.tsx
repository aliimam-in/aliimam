/**
 * Auto-generated logo component: File Code 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileCode2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileCode2OutlineLogo = React.forwardRef<SVGSVGElement, FileCode2OutlineLogoProps>(
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
      <path d="M10 12h-1v5h1" />
  <path d="M14 12h1v5h-1" />
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
    </svg>
  )
);

FileCode2OutlineLogo.displayName = "FileCode2OutlineLogo";

export const FileCode2OutlineLogoMetadata = {
  id: "file-code-2-outline",
  baseId: "file-code-2-outline",
  variant: "default",
  name: "File Code 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileCode2OutlineLogo;
