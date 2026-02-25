/**
 * Auto-generated logo component: Inner Shadow Top Left Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface InnerShadowTopLeftFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const InnerShadowTopLeftFilledLogo = React.forwardRef<SVGSVGElement, InnerShadowTopLeftFilledLogoProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10zm0 3a7 7 0 0 0 -7 7a1 1 0 0 0 2 0a5 5 0 0 1 5 -5a1 1 0 0 0 0 -2z" />
    </svg>
  )
);

InnerShadowTopLeftFilledLogo.displayName = "InnerShadowTopLeftFilledLogo";

export const InnerShadowTopLeftFilledLogoMetadata = {
  id: "inner-shadow-top-left-filled",
  baseId: "inner-shadow-top-left-filled",
  variant: "default",
  name: "Inner Shadow Top Left Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default InnerShadowTopLeftFilledLogo;
