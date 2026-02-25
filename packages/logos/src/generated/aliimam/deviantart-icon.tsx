/**
 * Auto-generated logo component: Deviantart Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeviantartIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const DeviantartIcon = React.forwardRef<SVGSVGElement, DeviantartIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 414"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <polyline fill="#45AD47" fillRule="nonzero" points="256 75.2057743 256 0.00442038002 180.796622 0.00442038002 173.292277 7.57354555 137.807068 75.1976767 126.648732 82.7263143 -2.84217094e-14 82.7263143 -2.84217094e-14 185.999628 69.6262347 185.999628 75.8268845 193.499925 -2.84217094e-14 338.396341 -2.84217094e-14 413.599719 75.2013538 413.599719 82.7077236 406.03262 118.194957 338.406463 129.351268 330.879849 256 330.879849 256 227.604512 186.373766 227.604512 180.179188 220.053606 256 75.2057743"></polyline>
    </g>
    </svg>
  )
);

DeviantartIcon.displayName = "DeviantartIcon";

export const DeviantartIconMetadata = {
  id: "deviantart-icon",
  baseId: "deviantart-icon",
  variant: "default",
  name: "Deviantart Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 414",
} as const;

export default DeviantartIcon;
