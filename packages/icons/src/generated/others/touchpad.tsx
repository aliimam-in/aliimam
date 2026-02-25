/**
 * Auto-generated logo component: Touchpad (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TouchpadLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TouchpadLogo = React.forwardRef<SVGSVGElement, TouchpadLogoProps>(
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
  <path d="M2 14h20" />
  <path d="M12 20v-6" />
    </svg>
  )
);

TouchpadLogo.displayName = "TouchpadLogo";

export const TouchpadLogoMetadata = {
  id: "touchpad",
  baseId: "touchpad",
  variant: "default",
  name: "Touchpad",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TouchpadLogo;
