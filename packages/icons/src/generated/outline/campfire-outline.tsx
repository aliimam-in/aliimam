/**
 * Auto-generated logo component: Campfire Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CampfireOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CampfireOutlineLogo = React.forwardRef<SVGSVGElement, CampfireOutlineLogoProps>(
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
      <path d="M4 21l16 -4" />
  <path d="M20 21l-16 -4" />
  <path d="M12 15a4 4 0 0 0 4 -4c0 -3 -2 -3 -2 -8c-4 2 -6 5 -6 8a4 4 0 0 0 4 4" />
    </svg>
  )
);

CampfireOutlineLogo.displayName = "CampfireOutlineLogo";

export const CampfireOutlineLogoMetadata = {
  id: "campfire-outline",
  baseId: "campfire-outline",
  variant: "default",
  name: "Campfire Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CampfireOutlineLogo;
