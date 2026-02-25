/**
 * Auto-generated logo component: Cockpit (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CockpitProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Cockpit = React.forwardRef<SVGSVGElement, CockpitProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
		<path d="M256,128 C256,198.692 198.692,256 128,256 C57.308,256 0,198.692 0,128 C0,57.308 57.308,0 128,0 C198.692,0 256,57.308 256,128" fill="#000000"></path>
		<path d="M86.8123,61.6718 L111.2843,86.1438 L74.3753,123.0518 C64.7473,132.6808 74.1083,142.0408 83.7363,132.4128 L138.8313,77.3178 C174.6703,41.4788 231.5043,98.3128 195.6653,134.1518 L179.2173,150.5998 L202.4853,173.8678 L174.6703,201.6828 L129.7383,156.7508 L171.1933,115.2958 C179.0383,107.4508 167.9393,96.3518 160.0943,104.1968 L102.0573,162.2338 C65.4163,194.0608 14.0653,143.2448 45.0893,105.2668 L86.8123,61.6718 Z" fill="#FFFFFF"></path>
	</g>
    </svg>
  )
);

Cockpit.displayName = "Cockpit";

export const CockpitMetadata = {
  id: "cockpit",
  baseId: "cockpit",
  variant: "default",
  name: "Cockpit",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default Cockpit;
