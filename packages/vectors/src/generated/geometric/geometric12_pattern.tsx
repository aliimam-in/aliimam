/**
 * Auto-generated logo component: Geometric12 (pattern)
 * Category: geometric
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Geometric12PatternProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric12Pattern = React.forwardRef<SVGSVGElement, Geometric12PatternProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 500 500"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M0 487.5V457.499H235.388V42.5013H0V12.5H500V42.5013H265.388V457.499H500V487.5H0Z" fill="#336BB7"/>
<path d="M202.263 440.93H0V410.929H172.263V97.3499H0V67.3486H202.263V440.93Z" fill="#F5BD33"/>
<path d="M0 377.14H140.133V122.859H0V152.861H110.133V347.139H0V377.14Z" fill="#336BB7"/>
<path d="M77.5043 321.96H0V291.959H47.5043V208.04H0V178.039H77.5043V321.96Z" fill="#F5BD33"/>
<path d="M298.513 67.3486H500V97.3499H328.513V410.929H500V440.93H298.513V67.3486Z" fill="#F5BD33"/>
<path d="M500 122.859H360.644V377.14H500V347.139H390.644V152.861H500V122.859Z" fill="#336BB7"/>
<path d="M423.272 178.039H500V208.04H453.272V291.959H500V321.96H423.272V178.039Z" fill="#F5BD33"/>
    </svg>
  )
);

Geometric12Pattern.displayName = "Geometric12Pattern";

export const Geometric12PatternMetadata = {
  id: "geometric12_pattern",
  baseId: "geometric12",
  variant: "pattern",
  name: "Geometric12",
  category: "geometric",
  tags: [],
  viewBox: "0 0 500 500",
} as const;

export default Geometric12Pattern;
