/**
 * Auto-generated logo component: Lightbulb (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LightbulbLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LightbulbLogo = React.forwardRef<SVGSVGElement, LightbulbLogoProps>(
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
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
  <path d="M9 18h6" />
  <path d="M10 22h4" />
    </svg>
  )
);

LightbulbLogo.displayName = "LightbulbLogo";

export const LightbulbLogoMetadata = {
  id: "lightbulb",
  baseId: "lightbulb",
  variant: "default",
  name: "Lightbulb",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LightbulbLogo;
