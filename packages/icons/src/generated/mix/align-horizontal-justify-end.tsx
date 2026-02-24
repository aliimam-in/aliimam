/**
 * Auto-generated logo component: Align Horizontal Justify End (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlignHorizontalJustifyEndLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlignHorizontalJustifyEndLogo = React.forwardRef<SVGSVGElement, AlignHorizontalJustifyEndLogoProps>(
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
      <rect width="6" height="14" x="2" y="5" rx="2" />
  <rect width="6" height="10" x="12" y="7" rx="2" />
  <path d="M22 2v20" />
    </svg>
  )
);

AlignHorizontalJustifyEndLogo.displayName = "AlignHorizontalJustifyEndLogo";

export const AlignHorizontalJustifyEndLogoMetadata = {
  id: "align-horizontal-justify-end",
  baseId: "align-horizontal-justify-end",
  variant: "default",
  name: "Align Horizontal Justify End",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlignHorizontalJustifyEndLogo;
