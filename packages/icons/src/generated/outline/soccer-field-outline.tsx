/**
 * Auto-generated logo component: Soccer Field Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SoccerFieldOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SoccerFieldOutlineLogo = React.forwardRef<SVGSVGElement, SoccerFieldOutlineLogoProps>(
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
      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M3 9h3v6h-3l0 -6" />
  <path d="M18 9h3v6h-3l0 -6" />
  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
  <path d="M12 5l0 14" />
    </svg>
  )
);

SoccerFieldOutlineLogo.displayName = "SoccerFieldOutlineLogo";

export const SoccerFieldOutlineLogoMetadata = {
  id: "soccer-field-outline",
  baseId: "soccer-field-outline",
  variant: "default",
  name: "Soccer Field Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SoccerFieldOutlineLogo;
