/**
 * Auto-generated logo component: Clock Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockExclamationOutlineLogo = React.forwardRef<SVGSVGElement, ClockExclamationOutlineLogoProps>(
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
      <path d="M20.986 12.502a9 9 0 1 0 -5.973 7.98" />
  <path d="M12 7v5l3 3" />
  <path d="M19 16v3" />
  <path d="M19 22v.01" />
    </svg>
  )
);

ClockExclamationOutlineLogo.displayName = "ClockExclamationOutlineLogo";

export const ClockExclamationOutlineLogoMetadata = {
  id: "clock-exclamation-outline",
  baseId: "clock-exclamation-outline",
  variant: "default",
  name: "Clock Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockExclamationOutlineLogo;
