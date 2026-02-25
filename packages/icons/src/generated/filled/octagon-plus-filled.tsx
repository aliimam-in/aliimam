/**
 * Auto-generated logo component: Octagon Plus Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface OctagonPlusFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const OctagonPlusFilledLogo = React.forwardRef<SVGSVGElement, OctagonPlusFilledLogoProps>(
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
      <path d="M13.196 1.246l5.575 2.39a3.04 3.04 0 0 1 1.595 1.594l2.388 5.573c.328 .764 .328 1.63 0 2.393l-2.39 5.575a3.04 3.04 0 0 1 -1.594 1.595l-5.573 2.388a3.03 3.03 0 0 1 -2.393 0l-5.574 -2.389a3.04 3.04 0 0 1 -1.595 -1.595l-2.388 -5.574a3.04 3.04 0 0 1 0 -2.392l2.39 -5.575a3.04 3.04 0 0 1 1.593 -1.595l5.574 -2.388a3.04 3.04 0 0 1 2.392 0m-1.196 6.754a1 1 0 0 0 -1 1v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0 -2h-2v-2a1 1 0 0 0 -1 -1" />
    </svg>
  )
);

OctagonPlusFilledLogo.displayName = "OctagonPlusFilledLogo";

export const OctagonPlusFilledLogoMetadata = {
  id: "octagon-plus-filled",
  baseId: "octagon-plus-filled",
  variant: "default",
  name: "Octagon Plus Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default OctagonPlusFilledLogo;
