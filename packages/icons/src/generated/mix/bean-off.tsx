/**
 * Auto-generated logo component: Bean Off (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BeanOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BeanOffLogo = React.forwardRef<SVGSVGElement, BeanOffLogoProps>(
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
      <path d="M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1" />
  <path d="M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66" />
  <path d="M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04" />
  <line x1="2" x2="22" y1="2" y2="22" />
    </svg>
  )
);

BeanOffLogo.displayName = "BeanOffLogo";

export const BeanOffLogoMetadata = {
  id: "bean-off",
  baseId: "bean-off",
  variant: "default",
  name: "Bean Off",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BeanOffLogo;
