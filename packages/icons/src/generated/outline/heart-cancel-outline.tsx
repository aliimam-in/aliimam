/**
 * Auto-generated logo component: Heart Cancel Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HeartCancelOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HeartCancelOutlineLogo = React.forwardRef<SVGSVGElement, HeartCancelOutlineLogoProps>(
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
      <path d="M12 20l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 0 1 7.993 6.01" />
  <path d="M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M17 21l4 -4" />
    </svg>
  )
);

HeartCancelOutlineLogo.displayName = "HeartCancelOutlineLogo";

export const HeartCancelOutlineLogoMetadata = {
  id: "heart-cancel-outline",
  baseId: "heart-cancel-outline",
  variant: "default",
  name: "Heart Cancel Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HeartCancelOutlineLogo;
