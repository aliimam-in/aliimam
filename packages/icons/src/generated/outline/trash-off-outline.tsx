/**
 * Auto-generated logo component: Trash Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TrashOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TrashOffOutlineLogo = React.forwardRef<SVGSVGElement, TrashOffOutlineLogoProps>(
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
      <path d="M3 3l18 18" />
  <path d="M4 7h3m4 0h9" />
  <path d="M10 11l0 6" />
  <path d="M14 14l0 3" />
  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l.077 -.923" />
  <path d="M18.384 14.373l.616 -7.373" />
  <path d="M9 5v-1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
    </svg>
  )
);

TrashOffOutlineLogo.displayName = "TrashOffOutlineLogo";

export const TrashOffOutlineLogoMetadata = {
  id: "trash-off-outline",
  baseId: "trash-off-outline",
  variant: "default",
  name: "Trash Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TrashOffOutlineLogo;
