/**
 * Auto-generated logo component: Sketch (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SketchLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const SketchLogo = React.forwardRef<SVGSVGElement, SketchLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="currentcolor" fillRule="evenodd" d="m.38 11.986 6.412-8.704a.8.8 0 0 1 .556-.32l8.564-.952a.8.8 0 0 1 .176 0l8.564.951a.8.8 0 0 1 .556.32l6.413 8.705a.8.8 0 0 1-.04.997L16.455 30.475a.6.6 0 0 1-.908 0L.418 12.983a.8.8 0 0 1-.039-.997zm17.826-7.403 6.047 5.712a.4.4 0 0 0 .674-.32l-.29-4.054a.2.2 0 0 1 .392-.07l1.326 4.642a1 1 0 0 0 .645.674l2.83.943a.2.2 0 0 1-.062.39h-2.72a1 1 0 0 0-.843.463l-7.414 11.65a.3.3 0 0 1-.523-.291l5.314-10.96a.6.6 0 0 0-.54-.862H8.958a.6.6 0 0 0-.54.862l5.314 10.96a.3.3 0 0 1-.523.292l-7.414-11.65a1 1 0 0 0-.844-.464H2.148a.2.2 0 0 1-.062-.39l2.908-.945a1 1 0 0 0 .652-.677l1.325-4.637a.2.2 0 0 1 .392.07l-.29 4.054a.4.4 0 0 0 .674.32l6.047-5.712a.2.2 0 0 1 .293.272L10.03 9.848a.4.4 0 0 0 .31.652h11.32a.4.4 0 0 0 .31-.652l-4.057-4.993a.2.2 0 0 1 .293-.272z" />
    </svg>
  )
);

SketchLogo.displayName = "SketchLogo";

export const SketchLogoMetadata = {
  id: "sketch",
  baseId: "sketch",
  variant: "default",
  name: "Sketch",
  category: "mix",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default SketchLogo;
