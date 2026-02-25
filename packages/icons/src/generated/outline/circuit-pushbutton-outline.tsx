/**
 * Auto-generated logo component: Circuit Pushbutton Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircuitPushbuttonOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircuitPushbuttonOutlineLogo = React.forwardRef<SVGSVGElement, CircuitPushbuttonOutlineLogoProps>(
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
      <path d="M2 17h2" />
  <path d="M20 17h2" />
  <path d="M4 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M16 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M6 11h12" />
  <path d="M12 11v-6" />
    </svg>
  )
);

CircuitPushbuttonOutlineLogo.displayName = "CircuitPushbuttonOutlineLogo";

export const CircuitPushbuttonOutlineLogoMetadata = {
  id: "circuit-pushbutton-outline",
  baseId: "circuit-pushbutton-outline",
  variant: "default",
  name: "Circuit Pushbutton Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircuitPushbuttonOutlineLogo;
