/**
 * Auto-generated logo component: Logic And Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LogicAndOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LogicAndOutlineLogo = React.forwardRef<SVGSVGElement, LogicAndOutlineLogoProps>(
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
      <path d="M22 12h-5" />
  <path d="M2 9h5" />
  <path d="M2 15h5" />
  <path d="M9 5c6 0 8 3.5 8 7s-2 7 -8 7h-2v-14h2" />
    </svg>
  )
);

LogicAndOutlineLogo.displayName = "LogicAndOutlineLogo";

export const LogicAndOutlineLogoMetadata = {
  id: "logic-and-outline",
  baseId: "logic-and-outline",
  variant: "default",
  name: "Logic And Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LogicAndOutlineLogo;
