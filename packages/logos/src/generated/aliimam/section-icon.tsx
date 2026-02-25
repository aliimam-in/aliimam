/**
 * Auto-generated logo component: Section Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SectionIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const SectionIcon = React.forwardRef<SVGSVGElement, SectionIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 431"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M98.1838916,302.837329 L219.803079,328.749435 L219.803079,101.304895 L98.1838916,127.117041 L98.1838916,302.837329 Z M256.011165,376.05319 L69.028607,325.517364 L69.028607,104.359259 L255.733496,54.1899556 L256.000059,376.064297 L256.011165,376.05319 Z" fill="#00A86B"></path>
        <path d="M179.318883,0 L0,65.0412748 L0,365.190764 L179.318883,430.243146 L179.318883,0 Z M31.9541919,347.564312 L31.9541919,82.6899404 L143.510641,48.2589377 L143.510641,381.984208 L31.9541919,347.553205 L31.9541919,347.564312 Z" fill="#00A86B"></path>
        <path d="M179.318883,109.879326 L197.011976,106.136343 L197.011976,69.9726829 L179.318883,74.7152759 L179.318883,109.879326 Z M179.318883,355.316841 L197.011976,360.092754 L197.011976,323.895775 L179.318883,320.119471 L179.318883,355.316841 Z" fill="#038754"></path>
    </g>
    </svg>
  )
);

SectionIcon.displayName = "SectionIcon";

export const SectionIconMetadata = {
  id: "section-icon",
  baseId: "section-icon",
  variant: "default",
  name: "Section Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 431",
} as const;

export default SectionIcon;
