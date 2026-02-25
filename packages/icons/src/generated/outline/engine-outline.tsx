/**
 * Auto-generated logo component: Engine Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EngineOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EngineOutlineLogo = React.forwardRef<SVGSVGElement, EngineOutlineLogoProps>(
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
  <path d="M6 10h2l2 -2h3.382a1 1 0 0 1 .894 .553l1.448 2.894a1 1 0 0 0 .894 .553h1.382v-2h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2v-2h-3v2a1 1 0 0 1 -1 1h-3.465a1 1 0 0 1 -.832 -.445l-1.703 -2.555h-2v-6" />
    </svg>
  )
);

EngineOutlineLogo.displayName = "EngineOutlineLogo";

export const EngineOutlineLogoMetadata = {
  id: "engine-outline",
  baseId: "engine-outline",
  variant: "default",
  name: "Engine Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EngineOutlineLogo;
