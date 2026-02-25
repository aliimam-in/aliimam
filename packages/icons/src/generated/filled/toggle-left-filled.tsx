/**
 * Auto-generated logo component: Toggle Left Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ToggleLeftFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ToggleLeftFilledLogo = React.forwardRef<SVGSVGElement, ToggleLeftFilledLogoProps>(
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
      <path d="M8 9a3 3 0 1 1 -3 3l.005 -.176a3 3 0 0 1 2.995 -2.824" />
  <path d="M16 5a7 7 0 0 1 0 14h-8a7 7 0 0 1 0 -14zm0 2h-8a5 5 0 1 0 0 10h8a5 5 0 0 0 0 -10" />
    </svg>
  )
);

ToggleLeftFilledLogo.displayName = "ToggleLeftFilledLogo";

export const ToggleLeftFilledLogoMetadata = {
  id: "toggle-left-filled",
  baseId: "toggle-left-filled",
  variant: "default",
  name: "Toggle Left Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ToggleLeftFilledLogo;
