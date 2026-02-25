/**
 * Auto-generated logo component: File Certificate Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileCertificateOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileCertificateOutlineLogo = React.forwardRef<SVGSVGElement, FileCertificateOutlineLogoProps>(
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
  <path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5" />
  <path d="M3 14a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5" />
    </svg>
  )
);

FileCertificateOutlineLogo.displayName = "FileCertificateOutlineLogo";

export const FileCertificateOutlineLogoMetadata = {
  id: "file-certificate-outline",
  baseId: "file-certificate-outline",
  variant: "default",
  name: "File Certificate Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileCertificateOutlineLogo;
