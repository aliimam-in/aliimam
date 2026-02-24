/**
 * Auto-generated logo component: Flask Round (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlaskRoundLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FlaskRoundLogo = React.forwardRef<SVGSVGElement, FlaskRoundLogoProps>(
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
      <path d="M10 2v6.292a7 7 0 1 0 4 0V2" />
  <path d="M5 15h14" />
  <path d="M8.5 2h7" />
    </svg>
  )
);

FlaskRoundLogo.displayName = "FlaskRoundLogo";

export const FlaskRoundLogoMetadata = {
  id: "flask-round",
  baseId: "flask-round",
  variant: "default",
  name: "Flask Round",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FlaskRoundLogo;
