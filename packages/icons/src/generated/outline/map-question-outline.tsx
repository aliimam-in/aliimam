/**
 * Auto-generated logo component: Map Question Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapQuestionOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapQuestionOutlineLogo = React.forwardRef<SVGSVGElement, MapQuestionOutlineLogoProps>(
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
      <path d="M15 20l-6 -3l-6 3v-13l6 -3l6 3l6 -3v7.5" />
  <path d="M9 4v13" />
  <path d="M15 7v5.5" />
  <path d="M19 22v.01" />
  <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
    </svg>
  )
);

MapQuestionOutlineLogo.displayName = "MapQuestionOutlineLogo";

export const MapQuestionOutlineLogoMetadata = {
  id: "map-question-outline",
  baseId: "map-question-outline",
  variant: "default",
  name: "Map Question Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapQuestionOutlineLogo;
