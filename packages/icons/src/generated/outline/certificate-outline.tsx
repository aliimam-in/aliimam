/**
 * Auto-generated logo component: Certificate Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CertificateOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CertificateOutlineLogo = React.forwardRef<SVGSVGElement, CertificateOutlineLogoProps>(
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
      <path d="M12 15a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
  <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
  <path d="M6 9l12 0" />
  <path d="M6 12l3 0" />
  <path d="M6 15l2 0" />
    </svg>
  )
);

CertificateOutlineLogo.displayName = "CertificateOutlineLogo";

export const CertificateOutlineLogoMetadata = {
  id: "certificate-outline",
  baseId: "certificate-outline",
  variant: "default",
  name: "Certificate Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CertificateOutlineLogo;
