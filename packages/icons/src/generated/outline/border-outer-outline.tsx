/**
 * Auto-generated logo component: Border Outer Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BorderOuterOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BorderOuterOutlineLogo = React.forwardRef<SVGSVGElement, BorderOuterOutlineLogoProps>(
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
      <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
  <path d="M12 8l0 .01" />
  <path d="M8 12l0 .01" />
  <path d="M12 12l0 .01" />
  <path d="M16 12l0 .01" />
  <path d="M12 16l0 .01" />
    </svg>
  )
);

BorderOuterOutlineLogo.displayName = "BorderOuterOutlineLogo";

export const BorderOuterOutlineLogoMetadata = {
  id: "border-outer-outline",
  baseId: "border-outer-outline",
  variant: "default",
  name: "Border Outer Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BorderOuterOutlineLogo;
