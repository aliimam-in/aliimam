/**
 * Auto-generated logo component: Svg (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SvgLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const SvgLogo = React.forwardRef<SVGSVGElement, SvgLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 300 300"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g stroke="#000" strokeWidth="38.009"><g id="svgstar" transform="translate(150 150)"><path id="svgbar" fill="#ffb13b" d="M-84.149-15.851a22.417 22.417 0 1 0 0 31.702H84.15a22.417 22.417 0 1 0 0-31.702Z" /><use href="#svgbar" transform="rotate(45)" /><use href="#svgbar" transform="rotate(90)" /><use href="#svgbar" transform="rotate(135)" /></g></g><use href="#svgstar" />
    </svg>
  )
);

SvgLogo.displayName = "SvgLogo";

export const SvgLogoMetadata = {
  id: "svg",
  baseId: "svg",
  variant: "default",
  name: "Svg",
  category: "mix",
  tags: [],
  viewBox: "0 0 300 300",
} as const;

export default SvgLogo;
