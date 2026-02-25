/**
 * Auto-generated logo component: File Type Html Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileTypeHtmlOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileTypeHtmlOutlineLogo = React.forwardRef<SVGSVGElement, FileTypeHtmlOutlineLogoProps>(
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
  <path d="M2 21v-6" />
  <path d="M5 15v6" />
  <path d="M2 18h3" />
  <path d="M20 15v6h2" />
  <path d="M13 21v-6l2 3l2 -3v6" />
  <path d="M7.5 15h3" />
  <path d="M9 15v6" />
    </svg>
  )
);

FileTypeHtmlOutlineLogo.displayName = "FileTypeHtmlOutlineLogo";

export const FileTypeHtmlOutlineLogoMetadata = {
  id: "file-type-html-outline",
  baseId: "file-type-html-outline",
  variant: "default",
  name: "File Type Html Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileTypeHtmlOutlineLogo;
