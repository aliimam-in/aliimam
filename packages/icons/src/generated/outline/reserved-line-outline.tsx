/**
 * Auto-generated logo component: Reserved Line Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ReservedLineOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ReservedLineOutlineLogo = React.forwardRef<SVGSVGElement, ReservedLineOutlineLogoProps>(
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
      <path d="M9 20h6" />
  <path d="M12 14v6" />
  <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -6" />
  <path d="M9 9h6" />
    </svg>
  )
);

ReservedLineOutlineLogo.displayName = "ReservedLineOutlineLogo";

export const ReservedLineOutlineLogoMetadata = {
  id: "reserved-line-outline",
  baseId: "reserved-line-outline",
  variant: "default",
  name: "Reserved Line Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ReservedLineOutlineLogo;
