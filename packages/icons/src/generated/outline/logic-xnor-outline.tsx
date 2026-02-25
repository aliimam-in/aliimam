/**
 * Auto-generated logo component: Logic Xnor Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LogicXnorOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LogicXnorOutlineLogo = React.forwardRef<SVGSVGElement, LogicXnorOutlineLogoProps>(
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
      <path d="M22 12h-2" />
  <path d="M2 9h4" />
  <path d="M2 15h4" />
  <path d="M5 19c1.778 -4.667 1.778 -9.333 0 -14" />
  <path d="M8 5c10.667 2.1 10.667 12.6 0 14c1.806 -4.667 1.806 -9.333 0 -14" />
  <path d="M16 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </svg>
  )
);

LogicXnorOutlineLogo.displayName = "LogicXnorOutlineLogo";

export const LogicXnorOutlineLogoMetadata = {
  id: "logic-xnor-outline",
  baseId: "logic-xnor-outline",
  variant: "default",
  name: "Logic Xnor Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LogicXnorOutlineLogo;
