/**
 * Auto-generated logo component: Cloud Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CloudExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CloudExclamationOutlineLogo = React.forwardRef<SVGSVGElement, CloudExclamationOutlineLogoProps>(
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
      <path d="M15 18.004h-8.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.374 0 2.562 .805 3.121 1.972" />
  <path d="M19 16v3" />
  <path d="M19 22v.01" />
    </svg>
  )
);

CloudExclamationOutlineLogo.displayName = "CloudExclamationOutlineLogo";

export const CloudExclamationOutlineLogoMetadata = {
  id: "cloud-exclamation-outline",
  baseId: "cloud-exclamation-outline",
  variant: "default",
  name: "Cloud Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CloudExclamationOutlineLogo;
