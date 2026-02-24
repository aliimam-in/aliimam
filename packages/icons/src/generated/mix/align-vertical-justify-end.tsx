/**
 * Auto-generated logo component: Align Vertical Justify End (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlignVerticalJustifyEndLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlignVerticalJustifyEndLogo = React.forwardRef<SVGSVGElement, AlignVerticalJustifyEndLogoProps>(
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
      <rect width="14" height="6" x="5" y="12" rx="2" />
  <rect width="10" height="6" x="7" y="2" rx="2" />
  <path d="M2 22h20" />
    </svg>
  )
);

AlignVerticalJustifyEndLogo.displayName = "AlignVerticalJustifyEndLogo";

export const AlignVerticalJustifyEndLogoMetadata = {
  id: "align-vertical-justify-end",
  baseId: "align-vertical-justify-end",
  variant: "default",
  name: "Align Vertical Justify End",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlignVerticalJustifyEndLogo;
