/**
 * Auto-generated logo component: Empathize Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EmpathizeOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EmpathizeOffOutlineLogo = React.forwardRef<SVGSVGElement, EmpathizeOffOutlineLogoProps>(
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
      <path d="M12 8a2.5 2.5 0 1 0 -2.5 -2.5" />
  <path d="M12.317 12.315l-.317 .317l-.728 -.727a3.088 3.088 0 1 0 -4.367 4.367l5.095 5.096l4.689 -4.69m1.324 -2.673a3.087 3.087 0 0 0 -3.021 -3.018" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

EmpathizeOffOutlineLogo.displayName = "EmpathizeOffOutlineLogo";

export const EmpathizeOffOutlineLogoMetadata = {
  id: "empathize-off-outline",
  baseId: "empathize-off-outline",
  variant: "default",
  name: "Empathize Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EmpathizeOffOutlineLogo;
