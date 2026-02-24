/**
 * Auto-generated logo component: Bean (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BeanLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BeanLogo = React.forwardRef<SVGSVGElement, BeanLogoProps>(
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
      <path d="M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z" />
  <path d="M5.341 10.62a4 4 0 1 0 5.279-5.28" />
    </svg>
  )
);

BeanLogo.displayName = "BeanLogo";

export const BeanLogoMetadata = {
  id: "bean",
  baseId: "bean",
  variant: "default",
  name: "Bean",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BeanLogo;
