/**
 * Auto-generated logo component: Car 4wd Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Car4wdFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Car4wdFilledLogo = React.forwardRef<SVGSVGElement, Car4wdFilledLogoProps>(
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
      <path d="M17 2a3 3 0 0 1 3 3v2a3 3 0 0 1 -6 0h-1v10h1a3 3 0 0 1 6 0v2a3 3 0 0 1 -6 0h-4a3 3 0 0 1 -6 0v-2a3 3 0 0 1 6 0h1v-10h-1a3 3 0 1 1 -6 0v-2a3 3 0 1 1 6 0h4a3 3 0 0 1 3 -3" />
    </svg>
  )
);

Car4wdFilledLogo.displayName = "Car4wdFilledLogo";

export const Car4wdFilledLogoMetadata = {
  id: "car-4wd-filled",
  baseId: "car-4wd-filled",
  variant: "default",
  name: "Car 4wd Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Car4wdFilledLogo;
