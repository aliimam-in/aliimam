/**
 * Auto-generated logo component: Keyframe Align Horizontal Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface KeyframeAlignHorizontalFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const KeyframeAlignHorizontalFilledLogo = React.forwardRef<SVGSVGElement, KeyframeAlignHorizontalFilledLogoProps>(
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
      <path d="M12 6c-.629 0 -1.214 .301 -1.606 .807l-2.908 3.748a2.395 2.395 0 0 0 -.011 2.876l2.919 3.762c.39 .505 .977 .807 1.606 .807c.629 0 1.214 -.301 1.606 -.807l2.908 -3.748a2.395 2.395 0 0 0 .011 -2.876l-2.919 -3.762a2.032 2.032 0 0 0 -1.606 -.807z" />
  <path d="M5 11a1 1 0 0 1 .117 1.993l-.117 .007h-2a1 1 0 0 1 -.117 -1.993l.117 -.007h2z" />
  <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-2a1 1 0 0 1 -.117 -1.993l.117 -.007h2z" />
    </svg>
  )
);

KeyframeAlignHorizontalFilledLogo.displayName = "KeyframeAlignHorizontalFilledLogo";

export const KeyframeAlignHorizontalFilledLogoMetadata = {
  id: "keyframe-align-horizontal-filled",
  baseId: "keyframe-align-horizontal-filled",
  variant: "default",
  name: "Keyframe Align Horizontal Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default KeyframeAlignHorizontalFilledLogo;
