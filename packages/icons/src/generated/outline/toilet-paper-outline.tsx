/**
 * Auto-generated logo component: Toilet Paper Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ToiletPaperOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ToiletPaperOutlineLogo = React.forwardRef<SVGSVGElement, ToiletPaperOutlineLogoProps>(
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
      <path d="M3 10a3 7 0 1 0 6 0a3 7 0 1 0 -6 0" />
  <path d="M21 10c0 -3.866 -1.343 -7 -3 -7" />
  <path d="M6 3h12" />
  <path d="M21 10v10l-3 -1l-3 2l-3 -3l-3 2v-10" />
  <path d="M6 10h.01" />
    </svg>
  )
);

ToiletPaperOutlineLogo.displayName = "ToiletPaperOutlineLogo";

export const ToiletPaperOutlineLogoMetadata = {
  id: "toilet-paper-outline",
  baseId: "toilet-paper-outline",
  variant: "default",
  name: "Toilet Paper Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ToiletPaperOutlineLogo;
