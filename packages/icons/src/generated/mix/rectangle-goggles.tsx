/**
 * Auto-generated logo component: Rectangle Goggles (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RectangleGogglesLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RectangleGogglesLogo = React.forwardRef<SVGSVGElement, RectangleGogglesLogoProps>(
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
      <path d="M20 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.6-.8l-1.6-2.13a1 1 0 0 0-1.6 0L9.6 17.2A2 2 0 0 1 8 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
    </svg>
  )
);

RectangleGogglesLogo.displayName = "RectangleGogglesLogo";

export const RectangleGogglesLogoMetadata = {
  id: "rectangle-goggles",
  baseId: "rectangle-goggles",
  variant: "default",
  name: "Rectangle Goggles",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RectangleGogglesLogo;
