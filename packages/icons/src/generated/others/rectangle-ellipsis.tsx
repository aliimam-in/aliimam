/**
 * Auto-generated logo component: Rectangle Ellipsis (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RectangleEllipsisLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RectangleEllipsisLogo = React.forwardRef<SVGSVGElement, RectangleEllipsisLogoProps>(
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
      <rect width="20" height="12" x="2" y="6" rx="2" />
  <path d="M12 12h.01" />
  <path d="M17 12h.01" />
  <path d="M7 12h.01" />
    </svg>
  )
);

RectangleEllipsisLogo.displayName = "RectangleEllipsisLogo";

export const RectangleEllipsisLogoMetadata = {
  id: "rectangle-ellipsis",
  baseId: "rectangle-ellipsis",
  variant: "default",
  name: "Rectangle Ellipsis",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RectangleEllipsisLogo;
