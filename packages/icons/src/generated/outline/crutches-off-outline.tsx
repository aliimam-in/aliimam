/**
 * Auto-generated logo component: Crutches Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CrutchesOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CrutchesOffOutlineLogo = React.forwardRef<SVGSVGElement, CrutchesOffOutlineLogoProps>(
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
      <path d="M8.178 4.174a2 2 0 0 1 1.822 -1.174h4a2 2 0 1 1 0 4h-3" />
  <path d="M11 21h2" />
  <path d="M12 21v-4.092a3 3 0 0 1 .504 -1.664l.992 -1.488a3 3 0 0 0 .097 -.155m.407 -3.601v-3" />
  <path d="M12 21v-4.092a3 3 0 0 0 -.504 -1.664l-.992 -1.488a3 3 0 0 1 -.504 -1.664v-2.092" />
  <path d="M10 11h1" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CrutchesOffOutlineLogo.displayName = "CrutchesOffOutlineLogo";

export const CrutchesOffOutlineLogoMetadata = {
  id: "crutches-off-outline",
  baseId: "crutches-off-outline",
  variant: "default",
  name: "Crutches Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CrutchesOffOutlineLogo;
