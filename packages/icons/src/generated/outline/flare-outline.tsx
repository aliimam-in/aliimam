/**
 * Auto-generated logo component: Flare Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FlareOutlineLogo = React.forwardRef<SVGSVGElement, FlareOutlineLogoProps>(
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
      <path d="M12 3l3 6l6 3l-6 3l-3 6l-3 -6l-6 -3l6 -3l3 -6" />
    </svg>
  )
);

FlareOutlineLogo.displayName = "FlareOutlineLogo";

export const FlareOutlineLogoMetadata = {
  id: "flare-outline",
  baseId: "flare-outline",
  variant: "default",
  name: "Flare Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FlareOutlineLogo;
