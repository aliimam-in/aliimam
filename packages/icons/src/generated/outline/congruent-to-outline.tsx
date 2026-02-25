/**
 * Auto-generated logo component: Congruent To Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CongruentToOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CongruentToOutlineLogo = React.forwardRef<SVGSVGElement, CongruentToOutlineLogoProps>(
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
      <path d="M5 13h14" />
  <path d="M5 17h14" />
  <path d="M5 7.686c2.333 -2.624 4.667 -1.856 7 .064s4.667 2.688 7 .064" />
    </svg>
  )
);

CongruentToOutlineLogo.displayName = "CongruentToOutlineLogo";

export const CongruentToOutlineLogoMetadata = {
  id: "congruent-to-outline",
  baseId: "congruent-to-outline",
  variant: "default",
  name: "Congruent To Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CongruentToOutlineLogo;
