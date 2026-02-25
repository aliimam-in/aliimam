/**
 * Auto-generated logo component: Trash X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TrashXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TrashXOutlineLogo = React.forwardRef<SVGSVGElement, TrashXOutlineLogoProps>(
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
      <path d="M4 7h16" />
  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
  <path d="M10 12l4 4m0 -4l-4 4" />
    </svg>
  )
);

TrashXOutlineLogo.displayName = "TrashXOutlineLogo";

export const TrashXOutlineLogoMetadata = {
  id: "trash-x-outline",
  baseId: "trash-x-outline",
  variant: "default",
  name: "Trash X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TrashXOutlineLogo;
