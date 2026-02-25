/**
 * Auto-generated logo component: File Euro Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileEuroOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileEuroOutlineLogo = React.forwardRef<SVGSVGElement, FileEuroOutlineLogoProps>(
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
  <path d="M12 14h-3" />
  <path d="M14 11.172a3 3 0 1 0 0 5.656" />
    </svg>
  )
);

FileEuroOutlineLogo.displayName = "FileEuroOutlineLogo";

export const FileEuroOutlineLogoMetadata = {
  id: "file-euro-outline",
  baseId: "file-euro-outline",
  variant: "default",
  name: "File Euro Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileEuroOutlineLogo;
