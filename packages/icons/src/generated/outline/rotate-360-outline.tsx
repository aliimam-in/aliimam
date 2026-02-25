/**
 * Auto-generated logo component: Rotate 360 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Rotate360OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Rotate360OutlineLogo = React.forwardRef<SVGSVGElement, Rotate360OutlineLogoProps>(
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
      <path d="M12 16h4v4" />
  <path d="M19.458 11.042c.86 -2.366 .722 -4.58 -.6 -5.9c-2.272 -2.274 -7.185 -1.045 -10.973 2.743c-3.788 3.788 -5.017 8.701 -2.744 10.974c2.227 2.226 6.987 1.093 10.74 -2.515" />
    </svg>
  )
);

Rotate360OutlineLogo.displayName = "Rotate360OutlineLogo";

export const Rotate360OutlineLogoMetadata = {
  id: "rotate-360-outline",
  baseId: "rotate-360-outline",
  variant: "default",
  name: "Rotate 360 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Rotate360OutlineLogo;
