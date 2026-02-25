/**
 * Auto-generated logo component: Recycle Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RecycleOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RecycleOffOutlineLogo = React.forwardRef<SVGSVGElement, RecycleOffOutlineLogoProps>(
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
      <path d="M12 17l-2 2l2 2m-2 -2h9m1.896 -2.071a2 2 0 0 0 -.146 -.679l-.55 -1" />
  <path d="M8.536 11l-.732 -2.732l-2.732 .732m2.732 -.732l-4.5 7.794a2 2 0 0 0 1.506 2.89l1.141 .024" />
  <path d="M15.464 11l2.732 .732l.732 -2.732m-.732 2.732l-4.5 -7.794a2 2 0 0 0 -3.256 -.14l-.591 .976" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

RecycleOffOutlineLogo.displayName = "RecycleOffOutlineLogo";

export const RecycleOffOutlineLogoMetadata = {
  id: "recycle-off-outline",
  baseId: "recycle-off-outline",
  variant: "default",
  name: "Recycle Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RecycleOffOutlineLogo;
