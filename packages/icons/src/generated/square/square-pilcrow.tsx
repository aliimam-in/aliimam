/**
 * Auto-generated logo component: Square Pilcrow (default)
 * Category: square
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquarePilcrowLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquarePilcrowLogo = React.forwardRef<SVGSVGElement, SquarePilcrowLogoProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M12 12H9.5a2.5 2.5 0 0 1 0-5H17" />
  <path d="M12 7v10" />
  <path d="M16 7v10" />
    </svg>
  )
);

SquarePilcrowLogo.displayName = "SquarePilcrowLogo";

export const SquarePilcrowLogoMetadata = {
  id: "square-pilcrow",
  baseId: "square-pilcrow",
  variant: "default",
  name: "Square Pilcrow",
  category: "square",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquarePilcrowLogo;
