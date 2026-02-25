/**
 * Auto-generated logo component: Logic Not Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LogicNotOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LogicNotOutlineLogo = React.forwardRef<SVGSVGElement, LogicNotOutlineLogoProps>(
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
  <path d="M5 5l10 7l-10 7l0 -14" />
  <path d="M15 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </svg>
  )
);

LogicNotOutlineLogo.displayName = "LogicNotOutlineLogo";

export const LogicNotOutlineLogoMetadata = {
  id: "logic-not-outline",
  baseId: "logic-not-outline",
  variant: "default",
  name: "Logic Not Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LogicNotOutlineLogo;
