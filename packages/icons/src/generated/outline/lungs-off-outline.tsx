/**
 * Auto-generated logo component: Lungs Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LungsOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LungsOffOutlineLogo = React.forwardRef<SVGSVGElement, LungsOffOutlineLogoProps>(
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
      <path d="M6.583 6.608c-1.206 1.058 -2.07 2.626 -2.933 5.449c-.42 1.37 -.636 2.962 -.648 4.775c-.012 1.675 1.261 3.054 2.877 3.161l.203 .007c1.611 0 2.918 -1.335 2.918 -2.98v-8.02" />
  <path d="M15 11v-3.743c0 -.694 .552 -1.257 1.233 -1.257c.204 0 .405 .052 .584 .15l.13 .083c1.46 1.059 2.432 2.647 3.405 5.824c.42 1.37 .636 2.962 .648 4.775c0 .063 0 .125 0 .187m-1.455 2.51c-.417 .265 -.9 .43 -1.419 .464l-.202 .007c-1.613 0 -2.92 -1.335 -2.92 -2.98v-2.02" />
  <path d="M9 12a2.99 2.99 0 0 0 2.132 -.89" />
  <path d="M12 4v4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

LungsOffOutlineLogo.displayName = "LungsOffOutlineLogo";

export const LungsOffOutlineLogoMetadata = {
  id: "lungs-off-outline",
  baseId: "lungs-off-outline",
  variant: "default",
  name: "Lungs Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LungsOffOutlineLogo;
