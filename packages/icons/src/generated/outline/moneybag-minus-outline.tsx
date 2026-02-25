/**
 * Auto-generated logo component: Moneybag Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoneybagMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoneybagMinusOutlineLogo = React.forwardRef<SVGSVGElement, MoneybagMinusOutlineLogoProps>(
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
      <path d="M9.5 3h5a1.5 1.5 0 0 1 1.5 1.5a3.5 3.5 0 0 1 -3.5 3.5h-1a3.5 3.5 0 0 1 -3.5 -3.5a1.5 1.5 0 0 1 1.5 -1.5" />
  <path d="M12.5 21h-4.5a4 4 0 0 1 -4 -4v-1a8 8 0 0 1 15.943 -.958" />
  <path d="M16 19h6" />
    </svg>
  )
);

MoneybagMinusOutlineLogo.displayName = "MoneybagMinusOutlineLogo";

export const MoneybagMinusOutlineLogoMetadata = {
  id: "moneybag-minus-outline",
  baseId: "moneybag-minus-outline",
  variant: "default",
  name: "Moneybag Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoneybagMinusOutlineLogo;
