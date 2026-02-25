/**
 * Auto-generated logo component: Pin (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PinLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PinLogo = React.forwardRef<SVGSVGElement, PinLogoProps>(
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
      <path d="M12 17v5" />
  <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" />
    </svg>
  )
);

PinLogo.displayName = "PinLogo";

export const PinLogoMetadata = {
  id: "pin",
  baseId: "pin",
  variant: "default",
  name: "Pin",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PinLogo;
