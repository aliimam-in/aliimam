/**
 * Auto-generated logo component: Border Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BorderRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BorderRightOutlineLogo = React.forwardRef<SVGSVGElement, BorderRightOutlineLogoProps>(
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
      <path d="M20 4l0 16" />
  <path d="M4 4l0 .01" />
  <path d="M8 4l0 .01" />
  <path d="M12 4l0 .01" />
  <path d="M16 4l0 .01" />
  <path d="M4 8l0 .01" />
  <path d="M12 8l0 .01" />
  <path d="M4 12l0 .01" />
  <path d="M8 12l0 .01" />
  <path d="M12 12l0 .01" />
  <path d="M16 12l0 .01" />
  <path d="M4 16l0 .01" />
  <path d="M12 16l0 .01" />
  <path d="M4 20l0 .01" />
  <path d="M8 20l0 .01" />
  <path d="M12 20l0 .01" />
  <path d="M16 20l0 .01" />
    </svg>
  )
);

BorderRightOutlineLogo.displayName = "BorderRightOutlineLogo";

export const BorderRightOutlineLogoMetadata = {
  id: "border-right-outline",
  baseId: "border-right-outline",
  variant: "default",
  name: "Border Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BorderRightOutlineLogo;
