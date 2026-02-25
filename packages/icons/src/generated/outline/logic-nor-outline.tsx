/**
 * Auto-generated logo component: Logic Nor Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LogicNorOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LogicNorOutlineLogo = React.forwardRef<SVGSVGElement, LogicNorOutlineLogoProps>(
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
      <path d="M22 12h-4" />
  <path d="M2 9h5" />
  <path d="M2 15h5" />
  <path d="M6 5c10.667 2.1 10.667 12.6 0 14c1.806 -4.667 1.806 -9.333 0 -14" />
  <path d="M14 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </svg>
  )
);

LogicNorOutlineLogo.displayName = "LogicNorOutlineLogo";

export const LogicNorOutlineLogoMetadata = {
  id: "logic-nor-outline",
  baseId: "logic-nor-outline",
  variant: "default",
  name: "Logic Nor Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LogicNorOutlineLogo;
