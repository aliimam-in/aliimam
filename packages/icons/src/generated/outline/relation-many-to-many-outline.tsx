/**
 * Auto-generated logo component: Relation Many To Many Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RelationManyToManyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RelationManyToManyOutlineLogo = React.forwardRef<SVGSVGElement, RelationManyToManyOutlineLogoProps>(
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
      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
  <path d="M15 14v-4l3 4v-4" />
  <path d="M6 14v-4l3 4v-4" />
  <path d="M12 10.5l0 .01" />
  <path d="M12 13.5l0 .01" />
    </svg>
  )
);

RelationManyToManyOutlineLogo.displayName = "RelationManyToManyOutlineLogo";

export const RelationManyToManyOutlineLogoMetadata = {
  id: "relation-many-to-many-outline",
  baseId: "relation-many-to-many-outline",
  variant: "default",
  name: "Relation Many To Many Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RelationManyToManyOutlineLogo;
