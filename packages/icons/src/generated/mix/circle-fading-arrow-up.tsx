/**
 * Auto-generated logo component: Circle Fading Arrow Up (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleFadingArrowUpLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleFadingArrowUpLogo = React.forwardRef<SVGSVGElement, CircleFadingArrowUpLogoProps>(
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
      <path d="M12 2a10 10 0 0 1 7.38 16.75" />
  <path d="m16 12-4-4-4 4" />
  <path d="M12 16V8" />
  <path d="M2.5 8.875a10 10 0 0 0-.5 3" />
  <path d="M2.83 16a10 10 0 0 0 2.43 3.4" />
  <path d="M4.636 5.235a10 10 0 0 1 .891-.857" />
  <path d="M8.644 21.42a10 10 0 0 0 7.631-.38" />
    </svg>
  )
);

CircleFadingArrowUpLogo.displayName = "CircleFadingArrowUpLogo";

export const CircleFadingArrowUpLogoMetadata = {
  id: "circle-fading-arrow-up",
  baseId: "circle-fading-arrow-up",
  variant: "default",
  name: "Circle Fading Arrow Up",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleFadingArrowUpLogo;
