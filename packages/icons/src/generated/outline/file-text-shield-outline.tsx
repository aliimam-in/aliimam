/**
 * Auto-generated logo component: File Text Shield Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileTextShieldOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileTextShieldOutlineLogo = React.forwardRef<SVGSVGElement, FileTextShieldOutlineLogoProps>(
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
      <path d="M13 3v4a.997 .997 0 0 0 1 1h4" />
  <path d="M11 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v3.5" />
  <path d="M8 9h1" />
  <path d="M8 12.994l3 0" />
  <path d="M8 16.997l2 0" />
  <path d="M21 15.994c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5" />
    </svg>
  )
);

FileTextShieldOutlineLogo.displayName = "FileTextShieldOutlineLogo";

export const FileTextShieldOutlineLogoMetadata = {
  id: "file-text-shield-outline",
  baseId: "file-text-shield-outline",
  variant: "default",
  name: "File Text Shield Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileTextShieldOutlineLogo;
