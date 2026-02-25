/**
 * Auto-generated logo component: Presentation Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PresentationFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PresentationFilledLogo = React.forwardRef<SVGSVGElement, PresentationFilledLogoProps>(
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
      <path d="M21 3a1 1 0 0 1 0 2v9a3 3 0 0 1 -3 3h-5v2h2a1 1 0 0 1 0 2h-6a1 1 0 0 1 0 -2h2v-2h-5a3 3 0 0 1 -3 -3v-9a1 1 0 1 1 0 -2zm-4.293 4.293a1 1 0 0 0 -1.414 0l-2.293 2.292l-1.293 -1.292a1 1 0 0 0 -1.414 0l-3 3a1 1 0 0 0 0 1.414l.094 .083a1 1 0 0 0 1.32 -.083l2.293 -2.292l1.293 1.292a1 1 0 0 0 1.414 0l3 -3a1 1 0 0 0 0 -1.414" />
    </svg>
  )
);

PresentationFilledLogo.displayName = "PresentationFilledLogo";

export const PresentationFilledLogoMetadata = {
  id: "presentation-filled",
  baseId: "presentation-filled",
  variant: "default",
  name: "Presentation Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PresentationFilledLogo;
