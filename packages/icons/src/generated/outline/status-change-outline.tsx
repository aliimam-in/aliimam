/**
 * Auto-generated logo component: Status Change Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StatusChangeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const StatusChangeOutlineLogo = React.forwardRef<SVGSVGElement, StatusChangeOutlineLogoProps>(
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
      <path d="M4 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M6 12v-2a6 6 0 1 1 12 0v2" />
  <path d="M15 9l3 3l3 -3" />
    </svg>
  )
);

StatusChangeOutlineLogo.displayName = "StatusChangeOutlineLogo";

export const StatusChangeOutlineLogoMetadata = {
  id: "status-change-outline",
  baseId: "status-change-outline",
  variant: "default",
  name: "Status Change Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default StatusChangeOutlineLogo;
