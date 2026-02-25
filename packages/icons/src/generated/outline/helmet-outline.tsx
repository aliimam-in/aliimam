/**
 * Auto-generated logo component: Helmet Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HelmetOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HelmetOutlineLogo = React.forwardRef<SVGSVGElement, HelmetOutlineLogoProps>(
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
      <path d="M12 4a9 9 0 0 1 5.656 16h-11.312a9 9 0 0 1 5.656 -16" />
  <path d="M20 9h-8.8a1 1 0 0 0 -.968 1.246c.507 2 1.596 3.418 3.268 4.254c2 1 4.333 1.5 7 1.5" />
    </svg>
  )
);

HelmetOutlineLogo.displayName = "HelmetOutlineLogo";

export const HelmetOutlineLogoMetadata = {
  id: "helmet-outline",
  baseId: "helmet-outline",
  variant: "default",
  name: "Helmet Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HelmetOutlineLogo;
