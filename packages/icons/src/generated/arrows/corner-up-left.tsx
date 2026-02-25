/**
 * Auto-generated logo component: Corner Up Left (default)
 * Category: arrows
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CornerUpLeftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CornerUpLeftLogo = React.forwardRef<SVGSVGElement, CornerUpLeftLogoProps>(
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
      <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
  <path d="M9 14 4 9l5-5" />
    </svg>
  )
);

CornerUpLeftLogo.displayName = "CornerUpLeftLogo";

export const CornerUpLeftLogoMetadata = {
  id: "corner-up-left",
  baseId: "corner-up-left",
  variant: "default",
  name: "Corner Up Left",
  category: "arrows",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CornerUpLeftLogo;
