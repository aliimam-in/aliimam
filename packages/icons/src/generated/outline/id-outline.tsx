/**
 * Auto-generated logo component: Id Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface IdOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const IdOutlineLogo = React.forwardRef<SVGSVGElement, IdOutlineLogoProps>(
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
      <path d="M3 7a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -10" />
  <path d="M7 10a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M15 8l2 0" />
  <path d="M15 12l2 0" />
  <path d="M7 16l10 0" />
    </svg>
  )
);

IdOutlineLogo.displayName = "IdOutlineLogo";

export const IdOutlineLogoMetadata = {
  id: "id-outline",
  baseId: "id-outline",
  variant: "default",
  name: "Id Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default IdOutlineLogo;
