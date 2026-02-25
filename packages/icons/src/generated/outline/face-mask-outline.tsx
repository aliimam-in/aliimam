/**
 * Auto-generated logo component: Face Mask Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FaceMaskOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FaceMaskOutlineLogo = React.forwardRef<SVGSVGElement, FaceMaskOutlineLogoProps>(
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
      <path d="M5 14.5h-.222c-1.535 0 -2.778 -1.12 -2.778 -2.5s1.243 -2.5 2.778 -2.5h.222" />
  <path d="M19 14.5h.222c1.534 0 2.778 -1.12 2.778 -2.5s-1.244 -2.5 -2.778 -2.5h-.222" />
  <path d="M9 10h6" />
  <path d="M9 14h6" />
  <path d="M12.55 18.843l5 -1.429a2 2 0 0 0 1.45 -1.923v-6.981a2 2 0 0 0 -1.45 -1.923l-5 -1.429a2 2 0 0 0 -1.1 0l-5 1.429a2 2 0 0 0 -1.45 1.922v6.982a2 2 0 0 0 1.45 1.923l5 1.429a2 2 0 0 0 1.1 0" />
    </svg>
  )
);

FaceMaskOutlineLogo.displayName = "FaceMaskOutlineLogo";

export const FaceMaskOutlineLogoMetadata = {
  id: "face-mask-outline",
  baseId: "face-mask-outline",
  variant: "default",
  name: "Face Mask Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FaceMaskOutlineLogo;
