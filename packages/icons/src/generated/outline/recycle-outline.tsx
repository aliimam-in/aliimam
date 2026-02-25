/**
 * Auto-generated logo component: Recycle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RecycleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RecycleOutlineLogo = React.forwardRef<SVGSVGElement, RecycleOutlineLogoProps>(
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
      <path d="M12 17l-2 2l2 2" />
  <path d="M10 19h9a2 2 0 0 0 1.75 -2.75l-.55 -1" />
  <path d="M8.536 11l-.732 -2.732l-2.732 .732" />
  <path d="M7.804 8.268l-4.5 7.794a2 2 0 0 0 1.506 2.89l1.141 .024" />
  <path d="M15.464 11l2.732 .732l.732 -2.732" />
  <path d="M18.196 11.732l-4.5 -7.794a2 2 0 0 0 -3.256 -.14l-.591 .976" />
    </svg>
  )
);

RecycleOutlineLogo.displayName = "RecycleOutlineLogo";

export const RecycleOutlineLogoMetadata = {
  id: "recycle-outline",
  baseId: "recycle-outline",
  variant: "default",
  name: "Recycle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RecycleOutlineLogo;
