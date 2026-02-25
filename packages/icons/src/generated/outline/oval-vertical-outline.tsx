/**
 * Auto-generated logo component: Oval Vertical Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface OvalVerticalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const OvalVerticalOutlineLogo = React.forwardRef<SVGSVGElement, OvalVerticalOutlineLogoProps>(
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
      <path d="M3 12c0 -3.314 4.03 -6 9 -6s9 2.686 9 6s-4.03 6 -9 6s-9 -2.686 -9 -6" />
    </svg>
  )
);

OvalVerticalOutlineLogo.displayName = "OvalVerticalOutlineLogo";

export const OvalVerticalOutlineLogoMetadata = {
  id: "oval-vertical-outline",
  baseId: "oval-vertical-outline",
  variant: "default",
  name: "Oval Vertical Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default OvalVerticalOutlineLogo;
