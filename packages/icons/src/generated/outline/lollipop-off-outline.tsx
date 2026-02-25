/**
 * Auto-generated logo component: Lollipop Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LollipopOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LollipopOffOutlineLogo = React.forwardRef<SVGSVGElement, LollipopOffOutlineLogoProps>(
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
      <path d="M7.462 7.493a7 7 0 0 0 9.06 9.039m2.416 -1.57a7 7 0 1 0 -9.884 -9.915" />
  <path d="M21 10a3.5 3.5 0 0 0 -7 0" />
  <path d="M12.71 12.715a3.5 3.5 0 0 1 -5.71 -2.715" />
  <path d="M14 17c.838 0 1.607 -.294 2.209 -.785m1.291 -2.715a3.5 3.5 0 0 0 -3.5 -3.5" />
  <path d="M14 3a3.5 3.5 0 0 0 -3.5 3.5" />
  <path d="M3 21l6 -6" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

LollipopOffOutlineLogo.displayName = "LollipopOffOutlineLogo";

export const LollipopOffOutlineLogoMetadata = {
  id: "lollipop-off-outline",
  baseId: "lollipop-off-outline",
  variant: "default",
  name: "Lollipop Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LollipopOffOutlineLogo;
