/**
 * Auto-generated logo component: Ease Out Control Point (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EaseOutControlPointFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EaseOutControlPointFilledLogo = React.forwardRef<SVGSVGElement, EaseOutControlPointFilledLogoProps>(
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
      <path d="M21 4a1 1 0 0 1 0 2c-1.097 0 -2.317 .361 -3.64 1.068c-2.373 1.265 -4.958 3.562 -7.607 6.59a68 68 0 0 0 -4.25 5.42a69 69 0 0 0 -1.003 1.456l-.455 .69q -.132 .204 -.196 .306a1 1 0 1 1 -1.696 -1.06l.286 -.445l.173 -.264a73 73 0 0 1 1.26 -1.839a70 70 0 0 1 4.376 -5.58c2.795 -3.195 5.544 -5.638 8.171 -7.04c1.592 -.848 3.122 -1.302 4.581 -1.302m-16 -2c1.306 0 2.418 .835 2.83 2h1.17a1 1 0 1 1 0 2h-1.171a3.001 3.001 0 1 1 -2.829 -4" />
  <path d="M14 4a1 1 0 0 1 0 2h-2a1 1 0 0 1 0 -2z" />
    </svg>
  )
);

EaseOutControlPointFilledLogo.displayName = "EaseOutControlPointFilledLogo";

export const EaseOutControlPointFilledLogoMetadata = {
  id: "ease-out-control-point_filled",
  baseId: "ease-out-control-point",
  variant: "filled",
  name: "Ease Out Control Point",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EaseOutControlPointFilledLogo;
