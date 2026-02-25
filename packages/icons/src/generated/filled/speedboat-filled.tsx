/**
 * Auto-generated logo component: Speedboat Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SpeedboatFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SpeedboatFilledLogo = React.forwardRef<SVGSVGElement, SpeedboatFilledLogoProps>(
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
      <path d="M14 7a1 1 0 0 1 .832 .445l1.702 2.555h5.466a1 1 0 0 1 .833 1.554l-3.1 4.66a4 4 0 0 1 -3.333 1.786h-14.4a1 1 0 0 1 -.936 -1.351l1.5 -4a1 1 0 0 1 .936 -.649h1.756l.9 -3h-.156a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 1 -1zm-6.657 5h1.887c.383 0 .762 -.074 1.12 -.219l3.557 -1.418q .186 -.075 .377 -.135l-.82 -1.228h-5.22z" />
    </svg>
  )
);

SpeedboatFilledLogo.displayName = "SpeedboatFilledLogo";

export const SpeedboatFilledLogoMetadata = {
  id: "speedboat-filled",
  baseId: "speedboat-filled",
  variant: "default",
  name: "Speedboat Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SpeedboatFilledLogo;
