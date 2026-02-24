/**
 * Auto-generated logo component: Trash (default)
 * Category: feather
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
      <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
    </svg>
  )
);

TrashLogo.displayName = "TrashLogo";

export const TrashLogoMetadata = {
  id: "trash",
  baseId: "trash",
  variant: "default",
  name: "Trash",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TrashLogo;
