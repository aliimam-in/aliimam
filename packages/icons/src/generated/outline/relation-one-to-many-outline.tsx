/**
 * Auto-generated logo component: Relation One To Many Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RelationOneToManyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RelationOneToManyOutlineLogo = React.forwardRef<SVGSVGElement, RelationOneToManyOutlineLogoProps>(
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
  <path d="M7 10h1v4" />
  <path d="M14 14v-4l3 4v-4" />
  <path d="M11 10.5l0 .01" />
  <path d="M11 13.5l0 .01" />
    </svg>
  )
);

RelationOneToManyOutlineLogo.displayName = "RelationOneToManyOutlineLogo";

export const RelationOneToManyOutlineLogoMetadata = {
  id: "relation-one-to-many-outline",
  baseId: "relation-one-to-many-outline",
  variant: "default",
  name: "Relation One To Many Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RelationOneToManyOutlineLogo;
