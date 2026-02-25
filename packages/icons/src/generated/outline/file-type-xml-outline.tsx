/**
 * Auto-generated logo component: File Type Xml Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileTypeXmlOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileTypeXmlOutlineLogo = React.forwardRef<SVGSVGElement, FileTypeXmlOutlineLogoProps>(
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
  <path d="M4 15l4 6" />
  <path d="M4 21l4 -6" />
  <path d="M19 15v6h3" />
  <path d="M11 21v-6l2.5 3l2.5 -3v6" />
    </svg>
  )
);

FileTypeXmlOutlineLogo.displayName = "FileTypeXmlOutlineLogo";

export const FileTypeXmlOutlineLogoMetadata = {
  id: "file-type-xml-outline",
  baseId: "file-type-xml-outline",
  variant: "default",
  name: "File Type Xml Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileTypeXmlOutlineLogo;
