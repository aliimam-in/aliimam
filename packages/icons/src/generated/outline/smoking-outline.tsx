/**
 * Auto-generated logo component: Smoking Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SmokingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SmokingOutlineLogo = React.forwardRef<SVGSVGElement, SmokingOutlineLogoProps>(
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
      <path d="M3 14a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -2" />
  <path d="M8 13l0 4" />
  <path d="M16 5v.5a2 2 0 0 0 2 2a2 2 0 0 1 2 2v.5" />
    </svg>
  )
);

SmokingOutlineLogo.displayName = "SmokingOutlineLogo";

export const SmokingOutlineLogoMetadata = {
  id: "smoking-outline",
  baseId: "smoking-outline",
  variant: "default",
  name: "Smoking Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SmokingOutlineLogo;
