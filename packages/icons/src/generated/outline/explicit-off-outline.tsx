/**
 * Auto-generated logo component: Explicit Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ExplicitOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ExplicitOffOutlineLogo = React.forwardRef<SVGSVGElement, ExplicitOffOutlineLogoProps>(
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
      <path d="M14 8h-2m-2 2v6h4" />
  <path d="M8 4h10a2 2 0 0 1 2 2v10m-.586 3.414a2 2 0 0 1 -1.414 .586h-12a2 2 0 0 1 -2 -2v-12c0 -.547 .22 -1.043 .576 -1.405" />
  <path d="M12 12h-2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ExplicitOffOutlineLogo.displayName = "ExplicitOffOutlineLogo";

export const ExplicitOffOutlineLogoMetadata = {
  id: "explicit-off-outline",
  baseId: "explicit-off-outline",
  variant: "default",
  name: "Explicit Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ExplicitOffOutlineLogo;
