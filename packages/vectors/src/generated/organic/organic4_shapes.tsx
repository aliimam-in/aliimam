
'use client';
import React from 'react';

export interface Organic4ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Organic4Shapes = React.forwardRef<SVGSVGElement, Organic4ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 300 300"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M131.346 25.5179C145.865 15.536 160.494 23.6422 179.014 25.5179C236 31.2893 240.822 -1.95915 266.904 4.25067C275.949 6.40427 284.437 7.5556 290.145 15.9279C294.316 22.0449 296.557 29.212 293.756 36.4618C288.463 50.1618 283.609 63.6451 272.883 74.3704C256.726 90.528 235.436 107.689 221.887 125.592C215.907 133.495 208.856 142.654 205.415 151.993C201.392 162.912 199.783 172.538 198.307 183.978C197.019 193.959 192.415 201.92 190.127 211.451C187.698 221.572 183.151 231.608 179.014 241.123C174.574 251.335 166.742 260.001 159.721 268.54C152.089 277.823 143.554 282.192 132.813 287.043C120.234 292.723 107.387 292.12 93.9454 292.12C81.4955 292.12 68.0118 289.863 56.3188 285.576C31.0725 276.319 15.8777 255.09 10.4561 228.939C8.85439 221.213 9.44067 213.146 9.44067 205.302C9.44067 197.462 8.87406 189.39 10.4561 181.666C13.169 168.42 18.3888 156.748 26.6462 146.013C47.5377 118.854 86.8662 115.093 104.889 85.4835C111.228 75.0694 111.155 65.7459 113.238 54.2879C115.157 43.7357 122.498 31.601 131.346 25.5179Z" fill="currentColor"/>
    </svg>
  )
);

Organic4Shapes.displayName = "Organic4Shapes";

export const Organic4ShapesMetadata = {
  id: "organic4_shapes",
  baseId: "organic4",
  variant: "shapes",
  name: "Organic4",
  category: "organic",
  tags: [],
  viewBox: "0 0 300 300",
} as const;

export default Organic4Shapes;
