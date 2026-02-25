/**
 * Auto-generated logo component: Flask Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlaskOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FlaskOffOutlineLogo = React.forwardRef<SVGSVGElement, FlaskOffOutlineLogoProps>(
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
      <path d="M9 3h6" />
  <path d="M13 9h1" />
  <path d="M10 3v3m-.268 3.736l-3.732 10.264a.7 .7 0 0 0 .5 1h11a.7 .7 0 0 0 .5 -1l-1.143 -3.142m-2.288 -6.294l-.569 -1.564v-6" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

FlaskOffOutlineLogo.displayName = "FlaskOffOutlineLogo";

export const FlaskOffOutlineLogoMetadata = {
  id: "flask-off-outline",
  baseId: "flask-off-outline",
  variant: "default",
  name: "Flask Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FlaskOffOutlineLogo;
