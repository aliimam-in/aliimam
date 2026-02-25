/**
 * Auto-generated logo component: Datocms Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DatocmsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const DatocmsIcon = React.forwardRef<SVGSVGElement, DatocmsIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 259"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient x1="0%" y1="49.9993686%" x2="100%" y2="49.9993686%" id="linearGradient-1">
            <stop stopColor="#FF593D" offset="0%"></stop>
            <stop stopColor="#FF7751" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path d="M128.001627,0.65257119 L0,0.65257119 L0,258.29879 L128.001627,258.29879 C192.018707,258.29879 256,200.619326 256,129.493574 C256,58.3678228 192.018707,0.65257119 128.001627,0.65257119 Z M128.001627,188.012432 C95.6722097,187.999835 69.474068,161.781785 69.4860428,129.452368 C69.4980258,97.122951 95.7155892,70.9243224 128.045007,70.9356973 C160.374424,70.9470795 186.57354,97.1641565 186.562765,129.493574 C186.562765,145.021331 180.392741,159.912743 169.408993,170.888558 C158.425245,181.864373 143.529379,188.024501 128.001627,188.012432 Z" fill="url(#linearGradient-1)" fillRule="nonzero"></path>
    </g>
    </svg>
  )
);

DatocmsIcon.displayName = "DatocmsIcon";

export const DatocmsIconMetadata = {
  id: "datocms-icon",
  baseId: "datocms-icon",
  variant: "default",
  name: "Datocms Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 259",
} as const;

export default DatocmsIcon;
