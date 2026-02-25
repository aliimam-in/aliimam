/**
 * Auto-generated logo component: Logic Or Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LogicOrOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LogicOrOutlineLogo = React.forwardRef<SVGSVGElement, LogicOrOutlineLogoProps>(
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
      <path d="M22 12h-6" />
  <path d="M2 9h7" />
  <path d="M2 15h7" />
  <path d="M8 5c10.667 2.1 10.667 12.6 0 14c1.806 -4.667 1.806 -9.333 0 -14" />
    </svg>
  )
);

LogicOrOutlineLogo.displayName = "LogicOrOutlineLogo";

export const LogicOrOutlineLogoMetadata = {
  id: "logic-or-outline",
  baseId: "logic-or-outline",
  variant: "default",
  name: "Logic Or Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LogicOrOutlineLogo;
