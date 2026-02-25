/**
 * Auto-generated logo component: Whirl Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WhirlOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WhirlOutlineLogo = React.forwardRef<SVGSVGElement, WhirlOutlineLogoProps>(
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
      <path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
  <path d="M12 21c-3.314 0 -6 -2.462 -6 -5.5s2.686 -5.5 6 -5.5" />
  <path d="M21 12c0 3.314 -2.462 6 -5.5 6s-5.5 -2.686 -5.5 -6" />
  <path d="M12 14c3.314 0 6 -2.462 6 -5.5s-2.686 -5.5 -6 -5.5" />
  <path d="M14 12c0 -3.314 -2.462 -6 -5.5 -6s-5.5 2.686 -5.5 6" />
    </svg>
  )
);

WhirlOutlineLogo.displayName = "WhirlOutlineLogo";

export const WhirlOutlineLogoMetadata = {
  id: "whirl-outline",
  baseId: "whirl-outline",
  variant: "default",
  name: "Whirl Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WhirlOutlineLogo;
