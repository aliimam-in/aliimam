/**
 * Auto-generated logo component: Empathize Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EmpathizeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EmpathizeOutlineLogo = React.forwardRef<SVGSVGElement, EmpathizeOutlineLogoProps>(
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
      <path d="M9.5 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
  <path d="M12 21.368l5.095 -5.096a3.088 3.088 0 1 0 -4.367 -4.367l-.728 .727l-.728 -.727a3.088 3.088 0 1 0 -4.367 4.367l5.095 5.096" />
    </svg>
  )
);

EmpathizeOutlineLogo.displayName = "EmpathizeOutlineLogo";

export const EmpathizeOutlineLogoMetadata = {
  id: "empathize-outline",
  baseId: "empathize-outline",
  variant: "default",
  name: "Empathize Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EmpathizeOutlineLogo;
