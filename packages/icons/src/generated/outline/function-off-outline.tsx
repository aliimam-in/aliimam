/**
 * Auto-generated logo component: Function Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FunctionOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FunctionOffOutlineLogo = React.forwardRef<SVGSVGElement, FunctionOffOutlineLogoProps>(
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
      <path d="M9 15.5v.25c0 .69 .56 1.25 1.25 1.25a1.38 1.38 0 0 0 1.374 -1.244l.376 -3.756m.363 -3.63l.013 -.126a1.38 1.38 0 0 1 1.374 -1.244c.69 0 1.25 .56 1.25 1.25v.25" />
  <path d="M8 4h10a2 2 0 0 1 2 2v10m-.586 3.414a2 2 0 0 1 -1.414 .586h-12a2 2 0 0 1 -2 -2v-12c0 -.547 .22 -1.043 .576 -1.405" />
  <path d="M9 12h3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

FunctionOffOutlineLogo.displayName = "FunctionOffOutlineLogo";

export const FunctionOffOutlineLogoMetadata = {
  id: "function-off-outline",
  baseId: "function-off-outline",
  variant: "default",
  name: "Function Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FunctionOffOutlineLogo;
