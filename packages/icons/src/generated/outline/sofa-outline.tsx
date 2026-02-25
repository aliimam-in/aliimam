/**
 * Auto-generated logo component: Sofa Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SofaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SofaOutlineLogo = React.forwardRef<SVGSVGElement, SofaOutlineLogoProps>(
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
      <path d="M4 11a2 2 0 0 1 2 2v1h12v-1a2 2 0 1 1 4 0v5a1 1 0 0 1 -1 1h-18a1 1 0 0 1 -1 -1v-5a2 2 0 0 1 2 -2" />
  <path d="M4 11v-3a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v3" />
  <path d="M12 5v9" />
    </svg>
  )
);

SofaOutlineLogo.displayName = "SofaOutlineLogo";

export const SofaOutlineLogoMetadata = {
  id: "sofa-outline",
  baseId: "sofa-outline",
  variant: "default",
  name: "Sofa Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SofaOutlineLogo;
