/**
 * Auto-generated logo component: Clock Code Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockCodeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockCodeOutlineLogo = React.forwardRef<SVGSVGElement, ClockCodeOutlineLogoProps>(
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
      <path d="M20.931 13.111a9 9 0 1 0 -9.453 7.874" />
  <path d="M20 21l2 -2l-2 -2" />
  <path d="M17 17l-2 2l2 2" />
  <path d="M12 7v5l2 2" />
    </svg>
  )
);

ClockCodeOutlineLogo.displayName = "ClockCodeOutlineLogo";

export const ClockCodeOutlineLogoMetadata = {
  id: "clock-code-outline",
  baseId: "clock-code-outline",
  variant: "default",
  name: "Clock Code Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockCodeOutlineLogo;
