/**
 * Auto-generated logo component: Mouse Right (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MouseRightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MouseRightLogo = React.forwardRef<SVGSVGElement, MouseRightLogoProps>(
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
      <path d="M12 7.318V10" />
  <path d="M19 10v5a7 7 0 0 1-14 0V9c0-3.527 2.608-6.515 6-7" />
  <circle cx="17" cy="4" r="2" />
    </svg>
  )
);

MouseRightLogo.displayName = "MouseRightLogo";

export const MouseRightLogoMetadata = {
  id: "mouse-right",
  baseId: "mouse-right",
  variant: "default",
  name: "Mouse Right",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MouseRightLogo;
