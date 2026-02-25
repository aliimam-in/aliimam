/**
 * Auto-generated logo component: Deer Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeerOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeerOutlineLogo = React.forwardRef<SVGSVGElement, DeerOutlineLogoProps>(
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
      <path d="M3 3c0 2 1 3 4 3c2 0 3 1 3 3" />
  <path d="M21 3c0 2 -1 3 -4 3c-2 0 -3 .333 -3 3" />
  <path d="M12 18c-1 0 -4 -3 -4 -6c0 -2 1.333 -3 4 -3s4 1 4 3c0 3 -3 6 -4 6" />
  <path d="M15.185 14.889l.095 -.18a4 4 0 1 1 -6.56 0" />
  <path d="M17 3c0 1.333 -.333 2.333 -1 3" />
  <path d="M7 3c0 1.333 .333 2.333 1 3" />
  <path d="M7 6c-2.667 .667 -4.333 1.667 -5 3" />
  <path d="M17 6c2.667 .667 4.333 1.667 5 3" />
  <path d="M8.5 10l-1.5 -1" />
  <path d="M15.5 10l1.5 -1" />
  <path d="M12 15h.01" />
    </svg>
  )
);

DeerOutlineLogo.displayName = "DeerOutlineLogo";

export const DeerOutlineLogoMetadata = {
  id: "deer-outline",
  baseId: "deer-outline",
  variant: "default",
  name: "Deer Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeerOutlineLogo;
