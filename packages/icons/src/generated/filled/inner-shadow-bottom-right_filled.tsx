/**
 * Auto-generated logo component: Inner Shadow Bottom Right (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface InnerShadowBottomRightFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const InnerShadowBottomRightFilledLogo = React.forwardRef<SVGSVGElement, InnerShadowBottomRightFilledLogoProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10zm6 9a1 1 0 0 0 -1 1a5 5 0 0 1 -5 5a1 1 0 0 0 0 2a7 7 0 0 0 7 -7a1 1 0 0 0 -1 -1z" />
    </svg>
  )
);

InnerShadowBottomRightFilledLogo.displayName = "InnerShadowBottomRightFilledLogo";

export const InnerShadowBottomRightFilledLogoMetadata = {
  id: "inner-shadow-bottom-right_filled",
  baseId: "inner-shadow-bottom-right",
  variant: "filled",
  name: "Inner Shadow Bottom Right",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default InnerShadowBottomRightFilledLogo;
