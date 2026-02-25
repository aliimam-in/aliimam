/**
 * Auto-generated logo component: Maximize Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MaximizeOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MaximizeOffOutlineLogo = React.forwardRef<SVGSVGElement, MaximizeOffOutlineLogoProps>(
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
      <path d="M4 8v-2c0 -.551 .223 -1.05 .584 -1.412" />
  <path d="M4 16v2a2 2 0 0 0 2 2h2" />
  <path d="M16 4h2a2 2 0 0 1 2 2v2" />
  <path d="M16 20h2c.545 0 1.04 -.218 1.4 -.572" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

MaximizeOffOutlineLogo.displayName = "MaximizeOffOutlineLogo";

export const MaximizeOffOutlineLogoMetadata = {
  id: "maximize-off-outline",
  baseId: "maximize-off-outline",
  variant: "default",
  name: "Maximize Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MaximizeOffOutlineLogo;
