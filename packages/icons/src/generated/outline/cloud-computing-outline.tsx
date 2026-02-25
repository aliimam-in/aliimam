/**
 * Auto-generated logo component: Cloud Computing Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CloudComputingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CloudComputingOutlineLogo = React.forwardRef<SVGSVGElement, CloudComputingOutlineLogoProps>(
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
      <path d="M6.657 16c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878" />
  <path d="M12 16v5" />
  <path d="M16 16v4a1 1 0 0 0 1 1h4" />
  <path d="M8 16v4a1 1 0 0 1 -1 1h-4" />
    </svg>
  )
);

CloudComputingOutlineLogo.displayName = "CloudComputingOutlineLogo";

export const CloudComputingOutlineLogoMetadata = {
  id: "cloud-computing-outline",
  baseId: "cloud-computing-outline",
  variant: "default",
  name: "Cloud Computing Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CloudComputingOutlineLogo;
