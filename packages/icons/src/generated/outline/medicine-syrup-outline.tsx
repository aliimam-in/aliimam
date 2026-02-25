/**
 * Auto-generated logo component: Medicine Syrup Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MedicineSyrupOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MedicineSyrupOutlineLogo = React.forwardRef<SVGSVGElement, MedicineSyrupOutlineLogoProps>(
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
      <path d="M8 21h8a1 1 0 0 0 1 -1v-10a3 3 0 0 0 -3 -3h-4a3 3 0 0 0 -3 3v10a1 1 0 0 0 1 1" />
  <path d="M10 14h4" />
  <path d="M12 12v4" />
  <path d="M10 7v-3a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3" />
    </svg>
  )
);

MedicineSyrupOutlineLogo.displayName = "MedicineSyrupOutlineLogo";

export const MedicineSyrupOutlineLogoMetadata = {
  id: "medicine-syrup-outline",
  baseId: "medicine-syrup-outline",
  variant: "default",
  name: "Medicine Syrup Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MedicineSyrupOutlineLogo;
