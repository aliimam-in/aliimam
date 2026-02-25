/**
 * Auto-generated logo component: Script Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ScriptPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ScriptPlusOutlineLogo = React.forwardRef<SVGSVGElement, ScriptPlusOutlineLogoProps>(
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
      <path d="M17 19h4" />
  <path d="M14 20h-8a3 3 0 0 1 0 -6h11a3 3 0 0 0 -3 3m7 -3v-8a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v8" />
  <path d="M19 17v4" />
    </svg>
  )
);

ScriptPlusOutlineLogo.displayName = "ScriptPlusOutlineLogo";

export const ScriptPlusOutlineLogoMetadata = {
  id: "script-plus-outline",
  baseId: "script-plus-outline",
  variant: "default",
  name: "Script Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ScriptPlusOutlineLogo;
