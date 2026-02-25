/**
 * Auto-generated logo component: Windmill Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WindmillOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WindmillOffOutlineLogo = React.forwardRef<SVGSVGElement, WindmillOffOutlineLogoProps>(
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
      <path d="M15.061 11.06c1.18 -.824 1.939 -2.11 1.939 -3.56c0 -2.49 -2.24 -4.5 -5 -4.5v5" />
  <path d="M12 12c0 2.76 2.01 5 4.5 5c.166 0 .33 -.01 .49 -.03m2.624 -1.36c.856 -.91 1.386 -2.19 1.386 -3.61h-5" />
  <path d="M12 12c-2.76 0 -5 2.01 -5 4.5s2.24 4.5 5 4.5v-9" />
  <path d="M6.981 7.033c-2.244 .285 -3.981 2.402 -3.981 4.967h9" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

WindmillOffOutlineLogo.displayName = "WindmillOffOutlineLogo";

export const WindmillOffOutlineLogoMetadata = {
  id: "windmill-off-outline",
  baseId: "windmill-off-outline",
  variant: "default",
  name: "Windmill Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WindmillOffOutlineLogo;
