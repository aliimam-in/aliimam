/**
 * Auto-generated logo component: Axe (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AxeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AxeLogo = React.forwardRef<SVGSVGElement, AxeLogoProps>(
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
      <path d="m14 12-8.381 8.38a1 1 0 0 1-3.001-3L11 9" />
  <path d="M15 15.5a.5.5 0 0 0 .5.5A6.5 6.5 0 0 0 22 9.5a.5.5 0 0 0-.5-.5h-1.672a2 2 0 0 1-1.414-.586l-5.062-5.062a1.205 1.205 0 0 0-1.704 0L9.352 5.648a1.205 1.205 0 0 0 0 1.704l5.062 5.062A2 2 0 0 1 15 13.828z" />
    </svg>
  )
);

AxeLogo.displayName = "AxeLogo";

export const AxeLogoMetadata = {
  id: "axe",
  baseId: "axe",
  variant: "default",
  name: "Axe",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AxeLogo;
