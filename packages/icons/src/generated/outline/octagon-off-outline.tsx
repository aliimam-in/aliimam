/**
 * Auto-generated logo component: Octagon Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface OctagonOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const OctagonOffOutlineLogo = React.forwardRef<SVGSVGElement, OctagonOffOutlineLogoProps>(
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
      <path d="M19.027 19.002a2.03 2.03 0 0 1 -.65 .444l-5.575 2.39a2.04 2.04 0 0 1 -1.604 0l-5.575 -2.39a2.036 2.036 0 0 1 -1.07 -1.07l-2.388 -5.574a2.036 2.036 0 0 1 0 -1.604l2.389 -5.575c.103 -.24 .25 -.457 .433 -.639m2.689 -1.31l3.522 -1.51a2.036 2.036 0 0 1 1.604 0l5.575 2.39c.48 .206 .863 .589 1.07 1.07l2.388 5.574c.22 .512 .22 1.092 0 1.604l-1.509 3.522" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

OctagonOffOutlineLogo.displayName = "OctagonOffOutlineLogo";

export const OctagonOffOutlineLogoMetadata = {
  id: "octagon-off-outline",
  baseId: "octagon-off-outline",
  variant: "default",
  name: "Octagon Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default OctagonOffOutlineLogo;
