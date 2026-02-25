/**
 * Auto-generated logo component: Hdmi Port (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HdmiPortLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HdmiPortLogo = React.forwardRef<SVGSVGElement, HdmiPortLogoProps>(
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
      <path d="M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z" />
  <path d="M7.5 12h9" />
    </svg>
  )
);

HdmiPortLogo.displayName = "HdmiPortLogo";

export const HdmiPortLogoMetadata = {
  id: "hdmi-port",
  baseId: "hdmi-port",
  variant: "default",
  name: "Hdmi Port",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HdmiPortLogo;
