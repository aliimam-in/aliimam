/**
 * Auto-generated logo component: Angle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AngleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AngleOutlineLogo = React.forwardRef<SVGSVGElement, AngleOutlineLogoProps>(
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
      <path d="M21 19h-18l9 -15" />
  <path d="M20.615 15.171h.015" />
  <path d="M19.515 11.771h.015" />
  <path d="M17.715 8.671h.015" />
  <path d="M15.415 5.971h.015" />
    </svg>
  )
);

AngleOutlineLogo.displayName = "AngleOutlineLogo";

export const AngleOutlineLogoMetadata = {
  id: "angle-outline",
  baseId: "angle-outline",
  variant: "default",
  name: "Angle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AngleOutlineLogo;
