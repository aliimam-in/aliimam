/**
 * Auto-generated logo component: Slash (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SlashLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SlashLogo = React.forwardRef<SVGSVGElement, SlashLogoProps>(
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
      <circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
    </svg>
  )
);

SlashLogo.displayName = "SlashLogo";

export const SlashLogoMetadata = {
  id: "slash",
  baseId: "slash",
  variant: "default",
  name: "Slash",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SlashLogo;
