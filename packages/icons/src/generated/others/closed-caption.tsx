/**
 * Auto-generated logo component: Closed Caption (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClosedCaptionLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClosedCaptionLogo = React.forwardRef<SVGSVGElement, ClosedCaptionLogoProps>(
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
      <path d="M10 9.17a3 3 0 1 0 0 5.66" />
  <path d="M17 9.17a3 3 0 1 0 0 5.66" />
  <rect x="2" y="5" width="20" height="14" rx="2" />
    </svg>
  )
);

ClosedCaptionLogo.displayName = "ClosedCaptionLogo";

export const ClosedCaptionLogoMetadata = {
  id: "closed-caption",
  baseId: "closed-caption",
  variant: "default",
  name: "Closed Caption",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClosedCaptionLogo;
