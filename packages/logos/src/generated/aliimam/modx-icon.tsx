/**
 * Auto-generated logo component: Modx Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ModxIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ModxIcon = React.forwardRef<SVGSVGElement, ModxIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 266"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <polygon fill="#00B5DE" points="256.002409 25.5228988 127.614494 25.5228988 109.825807 53.3660612 202.636348 110.599228 202.636348 110.599228 202.636348 110.599228"></polygon>
        <polygon fill="#00DECC" points="109.825807 53.3660612 23.9760565 0 23.9760565 128.387915 54.1394824 145.403181 202.636348 110.599228 202.636348 110.599228"></polygon>
        <polygon fill="#FF5529" points="230.479511 136.895548 202.636348 119.880282 145.403181 211.917402 230.479511 265.283464"></polygon>
        <polygon fill="#FF9640" points="202.636348 119.880282 202.636348 119.880282 202.636348 119.880282 53.3660612 155.457656 0 238.987144 128.387915 238.987144 145.403181 211.917402"></polygon>
    </g>
    </svg>
  )
);

ModxIcon.displayName = "ModxIcon";

export const ModxIconMetadata = {
  id: "modx-icon",
  baseId: "modx-icon",
  variant: "default",
  name: "Modx Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 266",
} as const;

export default ModxIcon;
