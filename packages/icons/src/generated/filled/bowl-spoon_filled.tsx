/**
 * Auto-generated logo component: Bowl Spoon (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BowlSpoonFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BowlSpoonFilledLogo = React.forwardRef<SVGSVGElement, BowlSpoonFilledLogoProps>(
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
      <path d="M20 10a2 2 0 0 1 2 2v.5c0 1.694 -2.247 5.49 -3.983 6.983l-.017 .013v.504a2 2 0 0 1 -1.85 1.995l-.15 .005h-8a2 2 0 0 1 -2 -2v-.496l-.065 -.053c-1.76 -1.496 -3.794 -4.965 -3.928 -6.77l-.007 -.181v-.5a2 2 0 0 1 2 -2z" />
  <path d="M8 2c1.71 0 3.237 .787 3.785 2h8.215a1 1 0 0 1 0 2l-8.216 .001c-.548 1.213 -2.074 1.999 -3.784 1.999c-2.144 0 -4 -1.237 -4 -3s1.856 -3 4 -3" />
    </svg>
  )
);

BowlSpoonFilledLogo.displayName = "BowlSpoonFilledLogo";

export const BowlSpoonFilledLogoMetadata = {
  id: "bowl-spoon_filled",
  baseId: "bowl-spoon",
  variant: "filled",
  name: "Bowl Spoon",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BowlSpoonFilledLogo;
