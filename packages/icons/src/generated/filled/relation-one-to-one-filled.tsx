/**
 * Auto-generated logo component: Relation One To One Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RelationOneToOneFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RelationOneToOneFilledLogo = React.forwardRef<SVGSVGElement, RelationOneToOneFilledLogoProps>(
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
      <path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-10 5h-1a1 1 0 1 0 0 2v3a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1m7 0h-1a1 1 0 0 0 0 2v3a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1m-4 3.5a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -3a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1" />
    </svg>
  )
);

RelationOneToOneFilledLogo.displayName = "RelationOneToOneFilledLogo";

export const RelationOneToOneFilledLogoMetadata = {
  id: "relation-one-to-one-filled",
  baseId: "relation-one-to-one-filled",
  variant: "default",
  name: "Relation One To One Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RelationOneToOneFilledLogo;
