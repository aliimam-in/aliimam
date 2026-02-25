/**
 * Auto-generated logo component: Microwave Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MicrowaveOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MicrowaveOutlineLogo = React.forwardRef<SVGSVGElement, MicrowaveOutlineLogoProps>(
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
      <path d="M3 7a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -10" />
  <path d="M15 6v12" />
  <path d="M18 12h.01" />
  <path d="M18 15h.01" />
  <path d="M18 9h.01" />
  <path d="M6.5 10.5c1 -.667 1.5 -.667 2.5 0c.833 .347 1.667 .926 2.5 0" />
  <path d="M6.5 13.5c1 -.667 1.5 -.667 2.5 0c.833 .347 1.667 .926 2.5 0" />
    </svg>
  )
);

MicrowaveOutlineLogo.displayName = "MicrowaveOutlineLogo";

export const MicrowaveOutlineLogoMetadata = {
  id: "microwave-outline",
  baseId: "microwave-outline",
  variant: "default",
  name: "Microwave Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MicrowaveOutlineLogo;
