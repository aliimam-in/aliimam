/**
 * Auto-generated logo component: Help Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HelpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HelpOutlineLogo = React.forwardRef<SVGSVGElement, HelpOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M12 17l0 .01" />
  <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
    </svg>
  )
);

HelpOutlineLogo.displayName = "HelpOutlineLogo";

export const HelpOutlineLogoMetadata = {
  id: "help-outline",
  baseId: "help-outline",
  variant: "default",
  name: "Help Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HelpOutlineLogo;
