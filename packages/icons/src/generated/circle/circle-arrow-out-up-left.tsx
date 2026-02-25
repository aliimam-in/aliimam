/**
 * Auto-generated logo component: Circle Arrow Out Up Left (default)
 * Category: circle
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleArrowOutUpLeftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleArrowOutUpLeftLogo = React.forwardRef<SVGSVGElement, CircleArrowOutUpLeftLogoProps>(
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
      <path d="M2 8V2h6" />
  <path d="m2 2 10 10" />
  <path d="M12 2A10 10 0 1 1 2 12" />
    </svg>
  )
);

CircleArrowOutUpLeftLogo.displayName = "CircleArrowOutUpLeftLogo";

export const CircleArrowOutUpLeftLogoMetadata = {
  id: "circle-arrow-out-up-left",
  baseId: "circle-arrow-out-up-left",
  variant: "default",
  name: "Circle Arrow Out Up Left",
  category: "circle",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleArrowOutUpLeftLogo;
