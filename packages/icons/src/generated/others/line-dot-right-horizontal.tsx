/**
 * Auto-generated logo component: Line Dot Right Horizontal (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LineDotRightHorizontalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LineDotRightHorizontalLogo = React.forwardRef<SVGSVGElement, LineDotRightHorizontalLogoProps>(
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
      <path d="M 3 12 L 15 12" />
  <circle cx="18" cy="12" r="3" />
    </svg>
  )
);

LineDotRightHorizontalLogo.displayName = "LineDotRightHorizontalLogo";

export const LineDotRightHorizontalLogoMetadata = {
  id: "line-dot-right-horizontal",
  baseId: "line-dot-right-horizontal",
  variant: "default",
  name: "Line Dot Right Horizontal",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LineDotRightHorizontalLogo;
