/**
 * Auto-generated logo component: Comet Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CometOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CometOutlineLogo = React.forwardRef<SVGSVGElement, CometOutlineLogoProps>(
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
      <path d="M15.5 18.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5l-3 -1.5" />
  <path d="M4 4l7 7" />
  <path d="M9 4l3.5 3.5" />
  <path d="M4 9l3.5 3.5" />
    </svg>
  )
);

CometOutlineLogo.displayName = "CometOutlineLogo";

export const CometOutlineLogoMetadata = {
  id: "comet-outline",
  baseId: "comet-outline",
  variant: "default",
  name: "Comet Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CometOutlineLogo;
