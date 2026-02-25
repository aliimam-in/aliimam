/**
 * Auto-generated logo component: Logic Nand Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LogicNandOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LogicNandOutlineLogo = React.forwardRef<SVGSVGElement, LogicNandOutlineLogoProps>(
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
      <path d="M22 12h-3" />
  <path d="M2 9h3" />
  <path d="M2 15h3" />
  <path d="M7 5c6 0 8 3.5 8 7s-2 7 -8 7h-2v-14h2" />
  <path d="M15 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </svg>
  )
);

LogicNandOutlineLogo.displayName = "LogicNandOutlineLogo";

export const LogicNandOutlineLogoMetadata = {
  id: "logic-nand-outline",
  baseId: "logic-nand-outline",
  variant: "default",
  name: "Logic Nand Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LogicNandOutlineLogo;
