
'use client';
import React from 'react';

export interface Abstract38SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Abstract38Sketch = React.forwardRef<SVGSVGElement, Abstract38SketchProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 446 446"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <g clipPath="url(#clip0_628_52)">
<path fillRule="evenodd" clipRule="evenodd" d="M415.253 178.561C399.669 181.836 361.683 204.09 322.885 232.726C309.573 242.551 315.092 252.461 336.277 237.513L363.468 218.366C420.205 178.477 447.558 173.69 434.815 206.189C418.744 247.338 371.26 269.508 291.067 273.539C245.288 275.806 206.734 269.172 144.235 247.757C133.764 244.146 133.845 244.735 142.693 238.773C157.79 228.612 176.134 211.648 183.601 201.067C198.942 179.317 202.432 168.401 180.273 191.746C163.796 209.045 148.293 221.725 129.543 233.398L120.859 238.857L112.579 235.414C46.9148 208.709 0 209.129 0 236.505C0 267.493 68.7488 277.821 116.8 254.056L126.946 249.102C130.03 250.11 151.702 259.262 201.296 272.531C285.872 295.12 385.302 280.761 424.912 240.284C456.324 208.289 450.399 171.172 415.253 178.561ZM53.3271 226.009C68.5054 228.108 112.092 240.788 112.092 243.139C112.092 243.895 95.2907 251.285 89.0408 253.216C57.7913 262.958 10.633 256.408 10.633 242.215C10.633 228.863 27.5158 222.481 53.3271 226.009Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_628_52">
<rect width="445.61" height="445.61" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Abstract38Sketch.displayName = "Abstract38Sketch";

export const Abstract38SketchMetadata = {
  id: "abstract38_sketch",
  baseId: "abstract38",
  variant: "sketch",
  name: "Abstract38",
  category: "abstract",
  tags: [],
  viewBox: "0 0 446 446",
} as const;

export default Abstract38Sketch;
