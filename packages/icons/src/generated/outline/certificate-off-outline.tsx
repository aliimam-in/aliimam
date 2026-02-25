/**
 * Auto-generated logo component: Certificate Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CertificateOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CertificateOffOutlineLogo = React.forwardRef<SVGSVGElement, CertificateOffOutlineLogoProps>(
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
      <path d="M12.876 12.881a3 3 0 0 0 4.243 4.243m.588 -3.42a3.012 3.012 0 0 0 -1.437 -1.423" />
  <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
  <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2m4 0h10a2 2 0 0 1 2 2v10" />
  <path d="M6 9h3m4 0h5" />
  <path d="M6 12h3" />
  <path d="M6 15h2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CertificateOffOutlineLogo.displayName = "CertificateOffOutlineLogo";

export const CertificateOffOutlineLogoMetadata = {
  id: "certificate-off-outline",
  baseId: "certificate-off-outline",
  variant: "default",
  name: "Certificate Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CertificateOffOutlineLogo;
