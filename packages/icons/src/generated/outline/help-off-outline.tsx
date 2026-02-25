/**
 * Auto-generated logo component: Help Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HelpOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HelpOffOutlineLogo = React.forwardRef<SVGSVGElement, HelpOffOutlineLogoProps>(
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
      <path d="M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098" />
  <path d="M12 17v.01" />
  <path d="M12 13.5a1.5 1.5 0 0 1 .394 -1.1m2.106 -1.9a2.6 2.6 0 0 0 -3.347 -3.361" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

HelpOffOutlineLogo.displayName = "HelpOffOutlineLogo";

export const HelpOffOutlineLogoMetadata = {
  id: "help-off-outline",
  baseId: "help-off-outline",
  variant: "default",
  name: "Help Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HelpOffOutlineLogo;
