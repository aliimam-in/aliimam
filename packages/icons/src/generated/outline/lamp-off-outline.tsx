/**
 * Auto-generated logo component: Lamp Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LampOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LampOffOutlineLogo = React.forwardRef<SVGSVGElement, LampOffOutlineLogoProps>(
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
  <path d="M7.325 7.35l-2.325 4.65h7m4 0h3l-4 -8h-6l-.338 .676" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

LampOffOutlineLogo.displayName = "LampOffOutlineLogo";

export const LampOffOutlineLogoMetadata = {
  id: "lamp-off-outline",
  baseId: "lamp-off-outline",
  variant: "default",
  name: "Lamp Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LampOffOutlineLogo;
