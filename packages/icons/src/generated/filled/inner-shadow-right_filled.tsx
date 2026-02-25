/**
 * Auto-generated logo component: Inner Shadow Right (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface InnerShadowRightFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const InnerShadowRightFilledLogo = React.forwardRef<SVGSVGElement, InnerShadowRightFilledLogoProps>(
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
      <path d="M4.929 4.929c3.905 -3.905 10.237 -3.905 14.142 0c3.905 3.905 3.905 10.237 0 14.142c-3.905 3.905 -10.237 3.905 -14.142 0c-3.905 -3.905 -3.905 -10.237 0 -14.142zm12.02 2.121a1 1 0 0 0 -1.413 1.414a5 5 0 0 1 0 7.072a1 1 0 0 0 1.414 1.414a7 7 0 0 0 0 -9.9z" />
    </svg>
  )
);

InnerShadowRightFilledLogo.displayName = "InnerShadowRightFilledLogo";

export const InnerShadowRightFilledLogoMetadata = {
  id: "inner-shadow-right_filled",
  baseId: "inner-shadow-right",
  variant: "filled",
  name: "Inner Shadow Right",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default InnerShadowRightFilledLogo;
