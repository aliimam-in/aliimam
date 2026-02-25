/**
 * Auto-generated logo component: Oval (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface OvalFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const OvalFilledLogo = React.forwardRef<SVGSVGElement, OvalFilledLogoProps>(
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
      <path d="M12 2c3.972 0 7 4.542 7 10s-3.028 10 -7 10c-3.9 0 -6.89 -4.379 -6.997 -9.703l-.003 -.297l.003 -.297c.107 -5.323 3.097 -9.703 6.997 -9.703z" />
    </svg>
  )
);

OvalFilledLogo.displayName = "OvalFilledLogo";

export const OvalFilledLogoMetadata = {
  id: "oval_filled",
  baseId: "oval",
  variant: "filled",
  name: "Oval",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default OvalFilledLogo;
