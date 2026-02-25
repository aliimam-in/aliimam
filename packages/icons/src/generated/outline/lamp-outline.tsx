/**
 * Auto-generated logo component: Lamp Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LampOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LampOutlineLogo = React.forwardRef<SVGSVGElement, LampOutlineLogoProps>(
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
      <path d="M9 20h6" />
  <path d="M12 20v-8" />
  <path d="M5 12h14l-4 -8h-6l-4 8" />
    </svg>
  )
);

LampOutlineLogo.displayName = "LampOutlineLogo";

export const LampOutlineLogoMetadata = {
  id: "lamp-outline",
  baseId: "lamp-outline",
  variant: "default",
  name: "Lamp Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LampOutlineLogo;
