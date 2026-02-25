/**
 * Auto-generated logo component: Flask Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlaskOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FlaskOutlineLogo = React.forwardRef<SVGSVGElement, FlaskOutlineLogoProps>(
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
      <path d="M9 3l6 0" />
  <path d="M10 9l4 0" />
  <path d="M10 3v6l-4 11a.7 .7 0 0 0 .5 1h11a.7 .7 0 0 0 .5 -1l-4 -11v-6" />
    </svg>
  )
);

FlaskOutlineLogo.displayName = "FlaskOutlineLogo";

export const FlaskOutlineLogoMetadata = {
  id: "flask-outline",
  baseId: "flask-outline",
  variant: "default",
  name: "Flask Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FlaskOutlineLogo;
