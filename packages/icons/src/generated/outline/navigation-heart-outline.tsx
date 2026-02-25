/**
 * Auto-generated logo component: Navigation Heart Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NavigationHeartOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NavigationHeartOutlineLogo = React.forwardRef<SVGSVGElement, NavigationHeartOutlineLogoProps>(
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
      <path d="M15.721 11.067l-3.721 -8.067l-7.97 17.275c-.07 .2 -.017 .424 .135 .572c.15 .148 .374 .193 .57 .116l5.614 -1.903" />
  <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296" />
    </svg>
  )
);

NavigationHeartOutlineLogo.displayName = "NavigationHeartOutlineLogo";

export const NavigationHeartOutlineLogoMetadata = {
  id: "navigation-heart-outline",
  baseId: "navigation-heart-outline",
  variant: "default",
  name: "Navigation Heart Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NavigationHeartOutlineLogo;
