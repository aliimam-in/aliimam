/**
 * Auto-generated logo component: Flask Conical (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlaskConicalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FlaskConicalLogo = React.forwardRef<SVGSVGElement, FlaskConicalLogoProps>(
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
      <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" />
  <path d="M6.453 15h11.094" />
  <path d="M8.5 2h7" />
    </svg>
  )
);

FlaskConicalLogo.displayName = "FlaskConicalLogo";

export const FlaskConicalLogoMetadata = {
  id: "flask-conical",
  baseId: "flask-conical",
  variant: "default",
  name: "Flask Conical",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FlaskConicalLogo;
