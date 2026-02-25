/**
 * Auto-generated logo component: Border Inner Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BorderInnerOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BorderInnerOutlineLogo = React.forwardRef<SVGSVGElement, BorderInnerOutlineLogoProps>(
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
      <path d="M4 12l16 0" />
  <path d="M12 4l0 16" />
  <path d="M4 4l0 .01" />
  <path d="M8 4l0 .01" />
  <path d="M16 4l0 .01" />
  <path d="M20 4l0 .01" />
  <path d="M4 8l0 .01" />
  <path d="M20 8l0 .01" />
  <path d="M4 16l0 .01" />
  <path d="M20 16l0 .01" />
  <path d="M4 20l0 .01" />
  <path d="M8 20l0 .01" />
  <path d="M16 20l0 .01" />
  <path d="M20 20l0 .01" />
    </svg>
  )
);

BorderInnerOutlineLogo.displayName = "BorderInnerOutlineLogo";

export const BorderInnerOutlineLogoMetadata = {
  id: "border-inner-outline",
  baseId: "border-inner-outline",
  variant: "default",
  name: "Border Inner Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BorderInnerOutlineLogo;
