/**
 * Auto-generated logo component: Unfold Vertical (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UnfoldVerticalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UnfoldVerticalLogo = React.forwardRef<SVGSVGElement, UnfoldVerticalLogoProps>(
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
      <path d="M12 22v-6" />
  <path d="M12 8V2" />
  <path d="M4 12H2" />
  <path d="M10 12H8" />
  <path d="M16 12h-2" />
  <path d="M22 12h-2" />
  <path d="m15 19-3 3-3-3" />
  <path d="m15 5-3-3-3 3" />
    </svg>
  )
);

UnfoldVerticalLogo.displayName = "UnfoldVerticalLogo";

export const UnfoldVerticalLogoMetadata = {
  id: "unfold-vertical",
  baseId: "unfold-vertical",
  variant: "default",
  name: "Unfold Vertical",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UnfoldVerticalLogo;
