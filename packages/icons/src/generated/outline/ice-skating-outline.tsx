/**
 * Auto-generated logo component: Ice Skating Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface IceSkatingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const IceSkatingOutlineLogo = React.forwardRef<SVGSVGElement, IceSkatingOutlineLogoProps>(
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
      <path d="M5.905 5h3.418a1 1 0 0 1 .928 .629l1.143 2.856a3 3 0 0 0 2.207 1.83l4.717 .926a2.084 2.084 0 0 1 1.682 2.045v.714a1 1 0 0 1 -1 1h-13.895a1 1 0 0 1 -1 -1.1l.8 -8a1 1 0 0 1 1 -.9" />
  <path d="M3 19h17a1 1 0 0 0 1 -1" />
  <path d="M9 15v4" />
  <path d="M15 15v4" />
    </svg>
  )
);

IceSkatingOutlineLogo.displayName = "IceSkatingOutlineLogo";

export const IceSkatingOutlineLogoMetadata = {
  id: "ice-skating-outline",
  baseId: "ice-skating-outline",
  variant: "default",
  name: "Ice Skating Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default IceSkatingOutlineLogo;
