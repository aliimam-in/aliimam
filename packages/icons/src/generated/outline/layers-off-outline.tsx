/**
 * Auto-generated logo component: Layers Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayersOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayersOffOutlineLogo = React.forwardRef<SVGSVGElement, LayersOffOutlineLogoProps>(
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
      <path d="M8.59 4.581c.362 -.359 .86 -.581 1.41 -.581h8a2 2 0 0 1 2 2v8c0 .556 -.227 1.06 -.594 1.422m-3.406 .578h-6a2 2 0 0 1 -2 -2v-6" />
  <path d="M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

LayersOffOutlineLogo.displayName = "LayersOffOutlineLogo";

export const LayersOffOutlineLogoMetadata = {
  id: "layers-off-outline",
  baseId: "layers-off-outline",
  variant: "default",
  name: "Layers Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayersOffOutlineLogo;
