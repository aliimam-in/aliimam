/**
 * Auto-generated logo component: Katalon Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface KatalonIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const KatalonIcon = React.forwardRef<SVGSVGElement, KatalonIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 393"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <polygon fill="#19D89F" points="256 261.406518 127.998039 261.406518 127.998039 392.131834 256 392.131834"></polygon>
        <polygon fill="#000000" points="128.00147 0 0 130.725316 0 261.450632 128.00147 261.450632 255.959153 130.725316 255.959153 0"></polygon>
    </g>
    </svg>
  )
);

KatalonIcon.displayName = "KatalonIcon";

export const KatalonIconMetadata = {
  id: "katalon-icon",
  baseId: "katalon-icon",
  variant: "default",
  name: "Katalon Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 393",
} as const;

export default KatalonIcon;
