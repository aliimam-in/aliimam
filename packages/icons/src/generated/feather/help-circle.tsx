/**
 * Auto-generated logo component: Help Circle (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HelpCircleLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HelpCircleLogo = React.forwardRef<SVGSVGElement, HelpCircleLogoProps>(
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
      <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
  )
);

HelpCircleLogo.displayName = "HelpCircleLogo";

export const HelpCircleLogoMetadata = {
  id: "help-circle",
  baseId: "help-circle",
  variant: "default",
  name: "Help Circle",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HelpCircleLogo;
