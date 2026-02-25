/**
 * Auto-generated logo component: Kirby Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface KirbyIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const KirbyIcon = React.forwardRef<SVGSVGElement, KirbyIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 299"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M128,0 L256,74.6524444 L256,224.014222 L128,298.666667 L0,224.014222 L0,74.6524444 L128,0 Z M128,16.7822222 L14.2222222,83.1502222 L14.2222222,215.516444 L128,281.877333 L241.777778,215.516444 L241.777778,83.1502222 L128,16.7822222 Z M184.888889,113.777778 L184.888889,149.333333 L149.333333,167.751111 L149.333333,170.666667 L184.888889,170.666667 L184.888889,199.111111 L71.1111111,199.111111 L71.1111111,170.666667 L106.666667,170.666667 L106.666667,167.559111 L71.1111111,149.333333 L71.1111111,113.777778 L128,144.334222 L184.888889,113.777778 Z" fill="#000000"></path>
    </g>
    </svg>
  )
);

KirbyIcon.displayName = "KirbyIcon";

export const KirbyIconMetadata = {
  id: "kirby-icon",
  baseId: "kirby-icon",
  variant: "default",
  name: "Kirby Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 299",
} as const;

export default KirbyIcon;
