/**
 * Auto-generated logo component: Engine Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EngineOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EngineOffOutlineLogo = React.forwardRef<SVGSVGElement, EngineOffOutlineLogoProps>(
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
      <path d="M3 10v6" />
  <path d="M12 5v3" />
  <path d="M10 5h4" />
  <path d="M5 13h-2" />
  <path d="M16 16h-1v2a1 1 0 0 1 -1 1h-3.465a1 1 0 0 1 -.832 -.445l-1.703 -2.555h-2v-6h2l.99 -.99m3.01 -1.01h1.382a1 1 0 0 1 .894 .553l1.448 2.894a1 1 0 0 0 .894 .553h1.382v-2h2a1 1 0 0 1 1 1v6" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

EngineOffOutlineLogo.displayName = "EngineOffOutlineLogo";

export const EngineOffOutlineLogoMetadata = {
  id: "engine-off-outline",
  baseId: "engine-off-outline",
  variant: "default",
  name: "Engine Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EngineOffOutlineLogo;
