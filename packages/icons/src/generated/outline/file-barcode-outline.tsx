/**
 * Auto-generated logo component: File Barcode Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileBarcodeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileBarcodeOutlineLogo = React.forwardRef<SVGSVGElement, FileBarcodeOutlineLogoProps>(
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
  <path d="M8 13h1v3h-1l0 -3" />
  <path d="M12 13v3" />
  <path d="M15 13h1v3h-1l0 -3" />
    </svg>
  )
);

FileBarcodeOutlineLogo.displayName = "FileBarcodeOutlineLogo";

export const FileBarcodeOutlineLogoMetadata = {
  id: "file-barcode-outline",
  baseId: "file-barcode-outline",
  variant: "default",
  name: "File Barcode Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileBarcodeOutlineLogo;
