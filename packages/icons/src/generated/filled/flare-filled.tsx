/**
 * Auto-generated logo component: Flare Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlareFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FlareFilledLogo = React.forwardRef<SVGSVGElement, FlareFilledLogoProps>(
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
      <path d="M11.106 2.553a1 1 0 0 1 1.788 0l2.851 5.701l5.702 2.852a1 1 0 0 1 .11 1.725l-.11 .063l-5.702 2.851l-2.85 5.702a1 1 0 0 1 -1.726 .11l-.063 -.11l-2.852 -5.702l-5.701 -2.85a1 1 0 0 1 -.11 -1.726l.11 -.063l5.701 -2.852z" />
    </svg>
  )
);

FlareFilledLogo.displayName = "FlareFilledLogo";

export const FlareFilledLogoMetadata = {
  id: "flare-filled",
  baseId: "flare-filled",
  variant: "default",
  name: "Flare Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FlareFilledLogo;
