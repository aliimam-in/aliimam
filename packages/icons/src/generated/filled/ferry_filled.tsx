/**
 * Auto-generated logo component: Ferry (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FerryFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FerryFilledLogo = React.forwardRef<SVGSVGElement, FerryFilledLogoProps>(
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
      <path d="M22 12a1 1 0 0 1 .86 1.51l-2.202 3.709a4.06 4.06 0 0 1 -3.365 1.781h-15.293a1 1 0 0 1 -.957 -1.291l1.521 -5a1 1 0 0 1 .957 -.709zm-3 1a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m-5.106 -7.447l.723 1.447h.874a1 1 0 0 1 .864 .497l2.037 3.503h-12.832l.973 -3.284a1 1 0 0 1 .958 -.716h4.89l-.275 -.553a1 1 0 0 1 1.788 -.894" />
    </svg>
  )
);

FerryFilledLogo.displayName = "FerryFilledLogo";

export const FerryFilledLogoMetadata = {
  id: "ferry_filled",
  baseId: "ferry",
  variant: "filled",
  name: "Ferry",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FerryFilledLogo;
