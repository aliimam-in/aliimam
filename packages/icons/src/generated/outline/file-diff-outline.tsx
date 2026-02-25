/**
 * Auto-generated logo component: File Diff Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileDiffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileDiffOutlineLogo = React.forwardRef<SVGSVGElement, FileDiffOutlineLogoProps>(
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
  <path d="M12 10l0 4" />
  <path d="M10 12l4 0" />
  <path d="M10 17l4 0" />
    </svg>
  )
);

FileDiffOutlineLogo.displayName = "FileDiffOutlineLogo";

export const FileDiffOutlineLogoMetadata = {
  id: "file-diff-outline",
  baseId: "file-diff-outline",
  variant: "default",
  name: "File Diff Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileDiffOutlineLogo;
