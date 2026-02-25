/**
 * Auto-generated logo component: Target Arrow Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TargetArrowOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TargetArrowOutlineLogo = React.forwardRef<SVGSVGElement, TargetArrowOutlineLogoProps>(
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
      <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M12 7a5 5 0 1 0 5 5" />
  <path d="M13 3.055a9 9 0 1 0 7.941 7.945" />
  <path d="M15 6v3h3l3 -3h-3v-3l-3 3" />
  <path d="M15 9l-3 3" />
    </svg>
  )
);

TargetArrowOutlineLogo.displayName = "TargetArrowOutlineLogo";

export const TargetArrowOutlineLogoMetadata = {
  id: "target-arrow-outline",
  baseId: "target-arrow-outline",
  variant: "default",
  name: "Target Arrow Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TargetArrowOutlineLogo;
