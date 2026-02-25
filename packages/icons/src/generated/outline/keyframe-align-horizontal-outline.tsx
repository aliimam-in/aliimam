/**
 * Auto-generated logo component: Keyframe Align Horizontal Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface KeyframeAlignHorizontalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const KeyframeAlignHorizontalOutlineLogo = React.forwardRef<SVGSVGElement, KeyframeAlignHorizontalOutlineLogoProps>(
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
      <path d="M12.816 16.58c-.207 .267 -.504 .42 -.816 .42c-.312 0 -.61 -.153 -.816 -.42l-2.908 -3.748a1.39 1.39 0 0 1 0 -1.664l2.908 -3.748c.207 -.267 .504 -.42 .816 -.42c.312 0 .61 .153 .816 .42l2.908 3.748a1.39 1.39 0 0 1 0 1.664l-2.908 3.748" />
  <path d="M3 12h2" />
  <path d="M19 12h2" />
    </svg>
  )
);

KeyframeAlignHorizontalOutlineLogo.displayName = "KeyframeAlignHorizontalOutlineLogo";

export const KeyframeAlignHorizontalOutlineLogoMetadata = {
  id: "keyframe-align-horizontal-outline",
  baseId: "keyframe-align-horizontal-outline",
  variant: "default",
  name: "Keyframe Align Horizontal Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default KeyframeAlignHorizontalOutlineLogo;
