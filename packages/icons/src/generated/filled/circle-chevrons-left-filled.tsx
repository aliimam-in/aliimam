/**
 * Auto-generated logo component: Circle Chevrons Left Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleChevronsLeftFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleChevronsLeftFilledLogo = React.forwardRef<SVGSVGElement, CircleChevronsLeftFilledLogoProps>(
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
      <path d="M11.927 2.133c5.494 -.04 9.992 4.359 10.073 9.852v.295c-.081 5.493 -4.579 9.893 -10.073 9.852c-5.494 -.04 -9.926 -4.505 -9.926 -10c0 -5.494 4.432 -9.959 9.926 -10m3.78 6.16a1 1 0 0 0 -1.414 0l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414 0l.083 -.094a1 1 0 0 0 -.083 -1.32l-2.292 -2.292l2.292 -2.293a1 1 0 0 0 0 -1.414m-4 0a1 1 0 0 0 -1.414 0l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414 0l.083 -.094a1 1 0 0 0 -.083 -1.32l-2.292 -2.293l2.292 -2.293a1 1 0 0 0 0 -1.414" />
    </svg>
  )
);

CircleChevronsLeftFilledLogo.displayName = "CircleChevronsLeftFilledLogo";

export const CircleChevronsLeftFilledLogoMetadata = {
  id: "circle-chevrons-left-filled",
  baseId: "circle-chevrons-left-filled",
  variant: "default",
  name: "Circle Chevrons Left Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleChevronsLeftFilledLogo;
