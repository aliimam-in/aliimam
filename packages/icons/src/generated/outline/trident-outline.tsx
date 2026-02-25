/**
 * Auto-generated logo component: Trident Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TridentOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TridentOutlineLogo = React.forwardRef<SVGSVGElement, TridentOutlineLogoProps>(
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
      <path d="M3 6l2 -2v3a7 7 0 0 0 14 0v-3l2 2" />
  <path d="M12 21v-18l-2 2m4 0l-2 -2" />
    </svg>
  )
);

TridentOutlineLogo.displayName = "TridentOutlineLogo";

export const TridentOutlineLogoMetadata = {
  id: "trident-outline",
  baseId: "trident-outline",
  variant: "default",
  name: "Trident Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TridentOutlineLogo;
