/**
 * Auto-generated logo component: Ironing Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface IroningOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const IroningOffOutlineLogo = React.forwardRef<SVGSVGElement, IroningOffOutlineLogoProps>(
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
      <path d="M10 6h6.459a3 3 0 0 1 2.959 2.507l.577 3.464l.804 4.821l.007 .044m-2.806 1.164h-15a7 7 0 0 1 7 -7h1m4 0h4.8" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

IroningOffOutlineLogo.displayName = "IroningOffOutlineLogo";

export const IroningOffOutlineLogoMetadata = {
  id: "ironing-off-outline",
  baseId: "ironing-off-outline",
  variant: "default",
  name: "Ironing Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default IroningOffOutlineLogo;
