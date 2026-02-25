/**
 * Auto-generated logo component: Medal Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MedalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MedalOutlineLogo = React.forwardRef<SVGSVGElement, MedalOutlineLogoProps>(
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
      <path d="M12 4v3m-4 -3v6m8 -6v6" />
  <path d="M12 18.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5l-3 -1.5" />
    </svg>
  )
);

MedalOutlineLogo.displayName = "MedalOutlineLogo";

export const MedalOutlineLogoMetadata = {
  id: "medal-outline",
  baseId: "medal-outline",
  variant: "default",
  name: "Medal Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MedalOutlineLogo;
