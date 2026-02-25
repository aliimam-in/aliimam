/**
 * Auto-generated logo component: Golf (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GolfFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GolfFilledLogo = React.forwardRef<SVGSVGElement, GolfFilledLogoProps>(
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
      <path d="M11 3a1 1 0 0 1 1.496 -.868l7 4a1 1 0 0 1 0 1.736l-6.496 3.712v6.42a1 1 0 0 1 -.883 .993l-.117 .007a1 1 0 0 1 -1 -1z" />
  <path d="M14.135 17.168a1 1 0 0 1 1.367 -.363c.916 .532 1.498 1.291 1.498 2.195c0 1.84 -2.319 3 -5 3s-5 -1.16 -5 -3c0 -.911 .577 -1.66 1.498 -2.195a1 1 0 1 1 1.004 1.73c-.365 .212 -.502 .39 -.502 .465c0 .086 .179 .296 .622 .518c.6 .3 1.456 .482 2.378 .482s1.777 -.182 2.378 -.482c.443 -.222 .622 -.432 .622 -.518c0 -.07 -.142 -.256 -.502 -.465a1 1 0 0 1 -.363 -1.367" />
    </svg>
  )
);

GolfFilledLogo.displayName = "GolfFilledLogo";

export const GolfFilledLogoMetadata = {
  id: "golf_filled",
  baseId: "golf",
  variant: "filled",
  name: "Golf",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GolfFilledLogo;
