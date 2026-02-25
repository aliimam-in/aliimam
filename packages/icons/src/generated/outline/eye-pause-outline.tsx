/**
 * Auto-generated logo component: Eye Pause Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EyePauseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EyePauseOutlineLogo = React.forwardRef<SVGSVGElement, EyePauseOutlineLogoProps>(
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
      <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M13.022 17.945a9.308 9.308 0 0 1 -1.022 .055c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6c-.195 .325 -.394 .636 -.596 .935" />
  <path d="M17 17v5" />
  <path d="M21 17v5" />
    </svg>
  )
);

EyePauseOutlineLogo.displayName = "EyePauseOutlineLogo";

export const EyePauseOutlineLogoMetadata = {
  id: "eye-pause-outline",
  baseId: "eye-pause-outline",
  variant: "default",
  name: "Eye Pause Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EyePauseOutlineLogo;
