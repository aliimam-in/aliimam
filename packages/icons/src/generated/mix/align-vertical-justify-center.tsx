/**
 * Auto-generated logo component: Align Vertical Justify Center (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlignVerticalJustifyCenterLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlignVerticalJustifyCenterLogo = React.forwardRef<SVGSVGElement, AlignVerticalJustifyCenterLogoProps>(
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
      <rect width="14" height="6" x="5" y="16" rx="2" />
  <rect width="10" height="6" x="7" y="2" rx="2" />
  <path d="M2 12h20" />
    </svg>
  )
);

AlignVerticalJustifyCenterLogo.displayName = "AlignVerticalJustifyCenterLogo";

export const AlignVerticalJustifyCenterLogoMetadata = {
  id: "align-vertical-justify-center",
  baseId: "align-vertical-justify-center",
  variant: "default",
  name: "Align Vertical Justify Center",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlignVerticalJustifyCenterLogo;
