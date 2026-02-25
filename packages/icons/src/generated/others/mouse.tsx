/**
 * Auto-generated logo component: Mouse (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MouseLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MouseLogo = React.forwardRef<SVGSVGElement, MouseLogoProps>(
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
      <rect x="5" y="2" width="14" height="20" rx="7" />
  <path d="M12 6v4" />
    </svg>
  )
);

MouseLogo.displayName = "MouseLogo";

export const MouseLogoMetadata = {
  id: "mouse",
  baseId: "mouse",
  variant: "default",
  name: "Mouse",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MouseLogo;
