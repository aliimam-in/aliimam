/**
 * Auto-generated logo component: Lamp 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Lamp2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Lamp2OutlineLogo = React.forwardRef<SVGSVGElement, Lamp2OutlineLogoProps>(
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
      <path d="M5 21h9" />
  <path d="M10 21l-7 -8l8.5 -5.5" />
  <path d="M13 14c-2.148 -2.148 -2.148 -5.852 0 -8c2.088 -2.088 5.842 -1.972 8 0l-8 8" />
  <path d="M11.742 7.574l-1.156 -1.156a2 2 0 0 1 2.828 -2.829l1.144 1.144" />
  <path d="M15.5 12l.208 .274a2.527 2.527 0 0 0 3.556 0c.939 -.933 .98 -2.42 .122 -3.4l-.366 -.369" />
    </svg>
  )
);

Lamp2OutlineLogo.displayName = "Lamp2OutlineLogo";

export const Lamp2OutlineLogoMetadata = {
  id: "lamp-2-outline",
  baseId: "lamp-2-outline",
  variant: "default",
  name: "Lamp 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Lamp2OutlineLogo;
