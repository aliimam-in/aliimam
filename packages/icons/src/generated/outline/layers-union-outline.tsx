/**
 * Auto-generated logo component: Layers Union Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayersUnionOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayersUnionOutlineLogo = React.forwardRef<SVGSVGElement, LayersUnionOutlineLogoProps>(
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
      <path d="M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2v-2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2" />
    </svg>
  )
);

LayersUnionOutlineLogo.displayName = "LayersUnionOutlineLogo";

export const LayersUnionOutlineLogoMetadata = {
  id: "layers-union-outline",
  baseId: "layers-union-outline",
  variant: "default",
  name: "Layers Union Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayersUnionOutlineLogo;
