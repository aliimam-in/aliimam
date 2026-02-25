/**
 * Auto-generated logo component: Lamp Ceiling (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LampCeilingLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LampCeilingLogo = React.forwardRef<SVGSVGElement, LampCeilingLogoProps>(
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
      <path d="M12 2v5" />
  <path d="M14.829 15.998a3 3 0 1 1-5.658 0" />
  <path d="M20.92 14.606A1 1 0 0 1 20 16H4a1 1 0 0 1-.92-1.394l3-7A1 1 0 0 1 7 7h10a1 1 0 0 1 .92.606z" />
    </svg>
  )
);

LampCeilingLogo.displayName = "LampCeilingLogo";

export const LampCeilingLogoMetadata = {
  id: "lamp-ceiling",
  baseId: "lamp-ceiling",
  variant: "default",
  name: "Lamp Ceiling",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LampCeilingLogo;
