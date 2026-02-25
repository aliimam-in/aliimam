/**
 * Auto-generated logo component: Ufo Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UfoOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UfoOutlineLogo = React.forwardRef<SVGSVGElement, UfoOutlineLogoProps>(
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
      <path d="M16.95 9.01c3.02 .739 5.05 2.123 5.05 3.714c0 2.367 -4.48 4.276 -10 4.276s-10 -1.909 -10 -4.276c0 -1.59 2.04 -2.985 5.07 -3.724" />
  <path d="M7 9c0 1.105 2.239 2 5 2s5 -.895 5 -2v-.035c0 -2.742 -2.239 -4.965 -5 -4.965s-5 2.223 -5 4.965v.035" />
  <path d="M15 17l2 3" />
  <path d="M8.5 17l-1.5 3" />
  <path d="M12 14h.01" />
  <path d="M7 13h.01" />
  <path d="M17 13h.01" />
    </svg>
  )
);

UfoOutlineLogo.displayName = "UfoOutlineLogo";

export const UfoOutlineLogoMetadata = {
  id: "ufo-outline",
  baseId: "ufo-outline",
  variant: "default",
  name: "Ufo Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UfoOutlineLogo;
