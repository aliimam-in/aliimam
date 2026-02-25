/**
 * Auto-generated logo component: Trash (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TrashLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TrashLogo = React.forwardRef<SVGSVGElement, TrashLogoProps>(
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
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  )
);

TrashLogo.displayName = "TrashLogo";

export const TrashLogoMetadata = {
  id: "trash",
  baseId: "trash",
  variant: "default",
  name: "Trash",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TrashLogo;
