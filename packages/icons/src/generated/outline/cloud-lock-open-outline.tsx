/**
 * Auto-generated logo component: Cloud Lock Open Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CloudLockOpenOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CloudLockOpenOutlineLogo = React.forwardRef<SVGSVGElement, CloudLockOpenOutlineLogoProps>(
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
      <path d="M19 18a3.5 3.5 0 0 0 0 -7h-1c.397 -1.768 -.285 -3.593 -1.788 -4.787c-1.503 -1.193 -3.6 -1.575 -5.5 -1s-3.315 2.019 -3.712 3.787c-2.199 -.088 -4.155 1.326 -4.666 3.373c-.512 2.047 .564 4.154 2.566 5.027" />
  <path d="M8 16a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -3" />
  <path d="M10 15v-2a2 2 0 0 1 3.736 -1" />
    </svg>
  )
);

CloudLockOpenOutlineLogo.displayName = "CloudLockOpenOutlineLogo";

export const CloudLockOpenOutlineLogoMetadata = {
  id: "cloud-lock-open-outline",
  baseId: "cloud-lock-open-outline",
  variant: "default",
  name: "Cloud Lock Open Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CloudLockOpenOutlineLogo;
