/**
 * Auto-generated logo component: Logic Xor Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LogicXorOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LogicXorOutlineLogo = React.forwardRef<SVGSVGElement, LogicXorOutlineLogoProps>(
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
  <path d="M2 9h6" />
  <path d="M2 15h6" />
  <path d="M7 19c1.778 -4.667 1.778 -9.333 0 -14" />
  <path d="M10 5c10.667 2.1 10.667 12.6 0 14c1.806 -4.667 1.806 -9.333 0 -14" />
    </svg>
  )
);

LogicXorOutlineLogo.displayName = "LogicXorOutlineLogo";

export const LogicXorOutlineLogoMetadata = {
  id: "logic-xor-outline",
  baseId: "logic-xor-outline",
  variant: "default",
  name: "Logic Xor Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LogicXorOutlineLogo;
