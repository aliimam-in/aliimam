/**
 * Auto-generated logo component: Power (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PowerLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PowerLogo = React.forwardRef<SVGSVGElement, PowerLogoProps>(
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
      <path d="M12 2v10" />
  <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>
  )
);

PowerLogo.displayName = "PowerLogo";

export const PowerLogoMetadata = {
  id: "power",
  baseId: "power",
  variant: "default",
  name: "Power",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PowerLogo;
