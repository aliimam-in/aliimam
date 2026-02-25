/**
 * Auto-generated logo component: Ruler 2 Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Ruler2OffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Ruler2OffOutlineLogo = React.forwardRef<SVGSVGElement, Ruler2OffOutlineLogoProps>(
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
      <path d="M12.03 7.97l4.97 -4.97l4 4l-5 5m-2 2l-7 7l-4 -4l7 -7" />
  <path d="M16 7l-1.5 -1.5" />
  <path d="M10 13l-1.5 -1.5" />
  <path d="M7 16l-1.5 -1.5" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

Ruler2OffOutlineLogo.displayName = "Ruler2OffOutlineLogo";

export const Ruler2OffOutlineLogoMetadata = {
  id: "ruler-2-off-outline",
  baseId: "ruler-2-off-outline",
  variant: "default",
  name: "Ruler 2 Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Ruler2OffOutlineLogo;
