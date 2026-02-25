/**
 * Auto-generated logo component: Inner Shadow Top Right Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface InnerShadowTopRightFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const InnerShadowTopRightFilledLogo = React.forwardRef<SVGSVGElement, InnerShadowTopRightFilledLogoProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10zm0 3a1 1 0 0 0 0 2a5 5 0 0 1 5 5a1 1 0 0 0 2 0a7 7 0 0 0 -7 -7z" />
    </svg>
  )
);

InnerShadowTopRightFilledLogo.displayName = "InnerShadowTopRightFilledLogo";

export const InnerShadowTopRightFilledLogoMetadata = {
  id: "inner-shadow-top-right-filled",
  baseId: "inner-shadow-top-right-filled",
  variant: "default",
  name: "Inner Shadow Top Right Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default InnerShadowTopRightFilledLogo;
