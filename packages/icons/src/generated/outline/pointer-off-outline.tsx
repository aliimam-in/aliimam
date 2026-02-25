/**
 * Auto-generated logo component: Pointer Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PointerOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PointerOffOutlineLogo = React.forwardRef<SVGSVGElement, PointerOffOutlineLogoProps>(
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
      <path d="M15.662 11.628l2.229 -1.496a1.2 1.2 0 0 0 -.309 -2.228l-8.013 -2.303m-5.569 -1.601l3.904 13.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l4.907 4.907a1.067 1.067 0 0 0 1.509 0l.524 -.524" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

PointerOffOutlineLogo.displayName = "PointerOffOutlineLogo";

export const PointerOffOutlineLogoMetadata = {
  id: "pointer-off-outline",
  baseId: "pointer-off-outline",
  variant: "default",
  name: "Pointer Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PointerOffOutlineLogo;
