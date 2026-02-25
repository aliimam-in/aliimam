/**
 * Auto-generated logo component: Circle Key Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleKeyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleKeyOutlineLogo = React.forwardRef<SVGSVGElement, CircleKeyOutlineLogoProps>(
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
      <path d="M12 10a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0" />
  <path d="M12.5 11.5l-4 4l1.5 1.5" />
  <path d="M12 15l-1.5 -1.5" />
    </svg>
  )
);

CircleKeyOutlineLogo.displayName = "CircleKeyOutlineLogo";

export const CircleKeyOutlineLogoMetadata = {
  id: "circle-key-outline",
  baseId: "circle-key-outline",
  variant: "default",
  name: "Circle Key Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleKeyOutlineLogo;
