/**
 * Auto-generated logo component: Pagekite (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PagekiteProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Pagekite = React.forwardRef<SVGSVGElement, PagekiteProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 285"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
		<path d="M206.052,203.265 C237.813,190.014 256,183.436 256,183.436 L189.698,0 L0,40.15 C0,40.15 4.022,51.556 10.833,96.291 L152.495,64.46 L206.052,203.265" fill="#E80022"></path>
		<path d="M22.837,187.856 C25.905,215.171 28.906,246.508 32.414,284.363 C64.581,267.83 94.334,253.374 120.974,240.94 L95.033,171.649 L22.837,187.856" fill="#B6B1B1"></path>
		<path d="M13.422,114.016 C15.574,129.323 17.946,147.622 20.507,169.433 L106.452,149.18 L137.332,233.38 C155.958,224.853 172.807,217.42 187.559,211.091 L141.076,86.93 L13.422,114.016" fill="#748282"></path>
	</g>
    </svg>
  )
);

Pagekite.displayName = "Pagekite";

export const PagekiteMetadata = {
  id: "pagekite",
  baseId: "pagekite",
  variant: "default",
  name: "Pagekite",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 285",
} as const;

export default Pagekite;
