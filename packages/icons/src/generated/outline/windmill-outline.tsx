/**
 * Auto-generated logo component: Windmill Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WindmillOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WindmillOutlineLogo = React.forwardRef<SVGSVGElement, WindmillOutlineLogoProps>(
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
      <path d="M12 12c2.76 0 5 -2.01 5 -4.5s-2.24 -4.5 -5 -4.5v9" />
  <path d="M12 12c0 2.76 2.01 5 4.5 5s4.5 -2.24 4.5 -5h-9" />
  <path d="M12 12c-2.76 0 -5 2.01 -5 4.5s2.24 4.5 5 4.5v-9" />
  <path d="M12 12c0 -2.76 -2.01 -5 -4.5 -5s-4.5 2.24 -4.5 5h9" />
    </svg>
  )
);

WindmillOutlineLogo.displayName = "WindmillOutlineLogo";

export const WindmillOutlineLogoMetadata = {
  id: "windmill-outline",
  baseId: "windmill-outline",
  variant: "default",
  name: "Windmill Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WindmillOutlineLogo;
