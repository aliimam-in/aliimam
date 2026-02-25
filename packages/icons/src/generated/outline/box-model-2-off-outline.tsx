/**
 * Auto-generated logo component: Box Model 2 Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BoxModel2OffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BoxModel2OffOutlineLogo = React.forwardRef<SVGSVGElement, BoxModel2OffOutlineLogoProps>(
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
      <path d="M8 4h10a2 2 0 0 1 2 2v10m-.586 3.414a2 2 0 0 1 -1.414 .586h-12a2 2 0 0 1 -2 -2v-12c0 -.547 .22 -1.043 .576 -1.405" />
  <path d="M12 8h4v4m0 4h-8v-8" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BoxModel2OffOutlineLogo.displayName = "BoxModel2OffOutlineLogo";

export const BoxModel2OffOutlineLogoMetadata = {
  id: "box-model-2-off-outline",
  baseId: "box-model-2-off-outline",
  variant: "default",
  name: "Box Model 2 Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BoxModel2OffOutlineLogo;
