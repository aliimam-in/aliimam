/**
 * Auto-generated logo component: Cone 2 (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Cone2FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Cone2FilledLogo = React.forwardRef<SVGSVGElement, Cone2FilledLogoProps>(
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
      <path d="M12 1c5.52 0 10 1.494 10 4.002v.5a1 1 0 0 1 -.121 .477l-8.139 15.006a2 2 0 0 1 -3.489 -.016l-8.13 -14.99a1 1 0 0 1 -.121 -.475v-.5c0 -2.509 4.48 -4.004 10 -4.004" />
    </svg>
  )
);

Cone2FilledLogo.displayName = "Cone2FilledLogo";

export const Cone2FilledLogoMetadata = {
  id: "cone-2_filled",
  baseId: "cone-2",
  variant: "filled",
  name: "Cone 2",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Cone2FilledLogo;
