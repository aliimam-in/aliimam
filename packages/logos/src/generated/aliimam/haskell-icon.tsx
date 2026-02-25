/**
 * Auto-generated logo component: Haskell Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HaskellIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const HaskellIcon = React.forwardRef<SVGSVGElement, HaskellIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 181"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
				<polygon fill="#453A62" points="0 180.591468 60.2352941 90.2969514 0 0 45.1764706 0 105.411765 90.2969514 45.1764706 180.591468"></polygon>
				<polygon fill="#5E5086" points="60.2352941 180.591468 120.470588 90.2969514 60.2352941 0 105.411765 0 225.877484 180.591468 180.705882 180.591468 143.061258 124.158612 105.40933 180.591468"></polygon>
				<path d="M205.803922,127.919667 L185.72549,97.8190601 L256,97.8190601 L256,127.922101 L205.803922,127.922101 L205.803922,127.919667 Z M175.686275,82.7748426 L155.607843,52.6742359 L256,52.6742359 L256,82.7748426 L175.686275,82.7748426 Z" fill="#8F4E8B"></path>
		</g>
    </svg>
  )
);

HaskellIcon.displayName = "HaskellIcon";

export const HaskellIconMetadata = {
  id: "haskell-icon",
  baseId: "haskell-icon",
  variant: "default",
  name: "Haskell Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 181",
} as const;

export default HaskellIcon;
