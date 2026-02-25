/**
 * Auto-generated logo component: Houndci (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HoundciProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Houndci = React.forwardRef<SVGSVGElement, HoundciProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 251"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M203.939787,250.980392 L6.71579231,250.980392 C3.00827645,250.980392 0,248.032585 0,244.396282 L0,6.58410988 C0,2.94929042 3.00676261,0 6.71579231,0 L249.284207,0 C252.991722,0 256,2.94780649 256,6.58410988 L256,109.950564 C255.027304,107.000589 243.634652,73.2502669 226.030119,56.1097331 C207.611501,38.1765719 174.214395,23.502835 179.180722,35.2970706 C184.147048,47.0913061 184.147046,77.8136531 184.147046,77.8136531 L134.141919,96.8865501 L126.641565,124.627924 L65.4427703,140.763052 C65.4427703,140.763052 69.8039075,171.977785 87.3945786,177.433263 C98.6777108,180.932554 172.635562,189.091279 172.635562,189.091279 L158.595365,250.980392 L203.939787,250.980392 L203.939787,250.980392 Z" fill="#A873D1"></path>
    </g>
    </svg>
  )
);

Houndci.displayName = "Houndci";

export const HoundciMetadata = {
  id: "houndci",
  baseId: "houndci",
  variant: "default",
  name: "Houndci",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 251",
} as const;

export default Houndci;
