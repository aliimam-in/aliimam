/**
 * Auto-generated logo component: Line Dotted Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LineDottedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LineDottedOutlineLogo = React.forwardRef<SVGSVGElement, LineDottedOutlineLogoProps>(
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
      <path d="M4 12v.01" />
  <path d="M8 12v.01" />
  <path d="M12 12v.01" />
  <path d="M16 12v.01" />
  <path d="M20 12v.01" />
    </svg>
  )
);

LineDottedOutlineLogo.displayName = "LineDottedOutlineLogo";

export const LineDottedOutlineLogoMetadata = {
  id: "line-dotted-outline",
  baseId: "line-dotted-outline",
  variant: "default",
  name: "Line Dotted Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LineDottedOutlineLogo;
