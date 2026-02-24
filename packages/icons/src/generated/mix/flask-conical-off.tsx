/**
 * Auto-generated logo component: Flask Conical Off (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlaskConicalOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FlaskConicalOffLogo = React.forwardRef<SVGSVGElement, FlaskConicalOffLogoProps>(
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
      <path d="M10 2v2.343" />
  <path d="M14 2v6.343" />
  <path d="m2 2 20 20" />
  <path d="M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563" />
  <path d="M6.453 15H15" />
  <path d="M8.5 2h7" />
    </svg>
  )
);

FlaskConicalOffLogo.displayName = "FlaskConicalOffLogo";

export const FlaskConicalOffLogoMetadata = {
  id: "flask-conical-off",
  baseId: "flask-conical-off",
  variant: "default",
  name: "Flask Conical Off",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FlaskConicalOffLogo;
