/**
 * Auto-generated logo component: Moneybag Move Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoneybagMoveOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoneybagMoveOutlineLogo = React.forwardRef<SVGSVGElement, MoneybagMoveOutlineLogoProps>(
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
      <path d="M9.5 3h5a1.5 1.5 0 0 1 1.5 1.5a3.5 3.5 0 0 1 -3.5 3.5h-1a3.5 3.5 0 0 1 -3.5 -3.5a1.5 1.5 0 0 1 1.5 -1.5" />
  <path d="M12.5 21h-4.5a4 4 0 0 1 -4 -4v-1a8 8 0 0 1 14.946 -3.971" />
  <path d="M16 19h6" />
  <path d="M19 16l3 3l-3 3" />
    </svg>
  )
);

MoneybagMoveOutlineLogo.displayName = "MoneybagMoveOutlineLogo";

export const MoneybagMoveOutlineLogoMetadata = {
  id: "moneybag-move-outline",
  baseId: "moneybag-move-outline",
  variant: "default",
  name: "Moneybag Move Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoneybagMoveOutlineLogo;
