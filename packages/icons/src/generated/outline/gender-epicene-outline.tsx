/**
 * Auto-generated logo component: Gender Epicene Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GenderEpiceneOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GenderEpiceneOutlineLogo = React.forwardRef<SVGSVGElement, GenderEpiceneOutlineLogoProps>(
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
      <path d="M15.536 15.536a5 5 0 1 0 -7.072 -7.072a5 5 0 0 0 7.072 7.072" />
  <path d="M15.536 15.535l5.464 -5.535" />
  <path d="M3 14l5.464 -5.535" />
  <path d="M12 12h.01" />
    </svg>
  )
);

GenderEpiceneOutlineLogo.displayName = "GenderEpiceneOutlineLogo";

export const GenderEpiceneOutlineLogoMetadata = {
  id: "gender-epicene-outline",
  baseId: "gender-epicene-outline",
  variant: "default",
  name: "Gender Epicene Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GenderEpiceneOutlineLogo;
