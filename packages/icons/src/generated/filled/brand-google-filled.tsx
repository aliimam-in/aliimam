/**
 * Auto-generated logo component: Brand Google Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandGoogleFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandGoogleFilledLogo = React.forwardRef<SVGSVGElement, BrandGoogleFilledLogoProps>(
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
      <path d="M12 2a9.96 9.96 0 0 1 6.29 2.226a1 1 0 0 1 .04 1.52l-1.51 1.362a1 1 0 0 1 -1.265 .06a6 6 0 1 0 2.103 6.836l.001 -.004h-3.66a1 1 0 0 1 -.992 -.883l-.007 -.117v-2a1 1 0 0 1 1 -1h6.945a1 1 0 0 1 .994 .89c.04 .367 .061 .737 .061 1.11c0 5.523 -4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10z" />
    </svg>
  )
);

BrandGoogleFilledLogo.displayName = "BrandGoogleFilledLogo";

export const BrandGoogleFilledLogoMetadata = {
  id: "brand-google-filled",
  baseId: "brand-google-filled",
  variant: "default",
  name: "Brand Google Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandGoogleFilledLogo;
