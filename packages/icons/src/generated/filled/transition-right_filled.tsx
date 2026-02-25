/**
 * Auto-generated logo component: Transition Right (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TransitionRightFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TransitionRightFilledLogo = React.forwardRef<SVGSVGElement, TransitionRightFilledLogoProps>(
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
      <path d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1 -4 4a1 1 0 0 1 -.117 -1.993l.117 -.007a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2a1 1 0 0 1 0 -2m-8 16a4 4 0 1 1 -8 0v-12a4 4 0 1 1 8 0v5h4.585l-1.292 -1.293a1 1 0 0 1 -.083 -1.32l.083 -.094a1 1 0 0 1 1.414 0l3 3l.097 .112l.071 .11l.031 .062l.034 .081l.024 .076l.03 .148l.006 .118l-.004 .085l-.016 .116l-.03 .111l-.044 .111l-.052 .098l-.074 .104l-.073 .082l-3 3a1 1 0 0 1 -1.414 -1.414l1.292 -1.293h-4.585z" />
    </svg>
  )
);

TransitionRightFilledLogo.displayName = "TransitionRightFilledLogo";

export const TransitionRightFilledLogoMetadata = {
  id: "transition-right_filled",
  baseId: "transition-right",
  variant: "filled",
  name: "Transition Right",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TransitionRightFilledLogo;
