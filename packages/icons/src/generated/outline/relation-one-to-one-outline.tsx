/**
 * Auto-generated logo component: Relation One To One Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RelationOneToOneOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RelationOneToOneOutlineLogo = React.forwardRef<SVGSVGElement, RelationOneToOneOutlineLogoProps>(
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
  <path d="M8 10h1v4" />
  <path d="M15 10h1v4" />
  <path d="M12 10.5l0 .01" />
  <path d="M12 13.5l0 .01" />
    </svg>
  )
);

RelationOneToOneOutlineLogo.displayName = "RelationOneToOneOutlineLogo";

export const RelationOneToOneOutlineLogoMetadata = {
  id: "relation-one-to-one-outline",
  baseId: "relation-one-to-one-outline",
  variant: "default",
  name: "Relation One To One Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RelationOneToOneOutlineLogo;
