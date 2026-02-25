/**
 * Auto-generated logo component: File Isr Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileIsrOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileIsrOutlineLogo = React.forwardRef<SVGSVGElement, FileIsrOutlineLogoProps>(
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
      <path d="M15 3v4a1 1 0 0 0 1 1h4" />
  <path d="M15 3v4a1 1 0 0 0 1 1h4" />
  <path d="M6 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" />
  <path d="M3 15l3 -3l3 3" />
    </svg>
  )
);

FileIsrOutlineLogo.displayName = "FileIsrOutlineLogo";

export const FileIsrOutlineLogoMetadata = {
  id: "file-isr-outline",
  baseId: "file-isr-outline",
  variant: "default",
  name: "File Isr Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileIsrOutlineLogo;
