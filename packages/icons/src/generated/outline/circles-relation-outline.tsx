/**
 * Auto-generated logo component: Circles Relation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CirclesRelationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CirclesRelationOutlineLogo = React.forwardRef<SVGSVGElement, CirclesRelationOutlineLogoProps>(
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
      <path d="M9.183 6.117a6 6 0 1 0 4.511 3.986" />
  <path d="M14.813 17.883a6 6 0 1 0 -4.496 -3.954" />
    </svg>
  )
);

CirclesRelationOutlineLogo.displayName = "CirclesRelationOutlineLogo";

export const CirclesRelationOutlineLogoMetadata = {
  id: "circles-relation-outline",
  baseId: "circles-relation-outline",
  variant: "default",
  name: "Circles Relation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CirclesRelationOutlineLogo;
