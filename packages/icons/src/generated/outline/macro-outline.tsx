/**
 * Auto-generated logo component: Macro Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MacroOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MacroOutlineLogo = React.forwardRef<SVGSVGElement, MacroOutlineLogoProps>(
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
      <path d="M6 15a6 6 0 1 0 12 0" />
  <path d="M18 15a6 6 0 0 0 -6 6" />
  <path d="M12 21a6 6 0 0 0 -6 -6" />
  <path d="M12 21v-10" />
  <path d="M12 11a5 5 0 0 1 -5 -5v-3l3 2l2 -2l2 2l3 -2v3a5 5 0 0 1 -5 5" />
    </svg>
  )
);

MacroOutlineLogo.displayName = "MacroOutlineLogo";

export const MacroOutlineLogoMetadata = {
  id: "macro-outline",
  baseId: "macro-outline",
  variant: "default",
  name: "Macro Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MacroOutlineLogo;
