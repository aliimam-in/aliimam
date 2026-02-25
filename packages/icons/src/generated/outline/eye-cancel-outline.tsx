/**
 * Auto-generated logo component: Eye Cancel Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EyeCancelOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EyeCancelOutlineLogo = React.forwardRef<SVGSVGElement, EyeCancelOutlineLogoProps>(
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
      <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M12 18c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
  <path d="M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M17 21l4 -4" />
    </svg>
  )
);

EyeCancelOutlineLogo.displayName = "EyeCancelOutlineLogo";

export const EyeCancelOutlineLogoMetadata = {
  id: "eye-cancel-outline",
  baseId: "eye-cancel-outline",
  variant: "default",
  name: "Eye Cancel Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EyeCancelOutlineLogo;
