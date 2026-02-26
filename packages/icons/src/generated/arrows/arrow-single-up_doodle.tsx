/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowSingleUpDoodleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowSingleUpDoodle = React.forwardRef<SVGSVGElement, ArrowSingleUpDoodleProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 93 59"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M44.7951 9.92891C39.2733 16.3715 33.5843 22.4217 28.5797 28.9929C21.8398 37.8423 15.6031 47.077 9.20251 56.183C7.44024 58.6896 4.95612 59.6124 2.8053 58.3161C0.594754 56.9851 0.0663444 54.1037 1.84371 51.7291C10.5402 40.1119 19.19 28.4508 28.0926 16.9898C31.9709 11.9977 36.4281 7.45853 40.5978 2.68892C43.7482 -0.920935 46.8127 -0.899944 49.8522 2.77489C60.2223 15.3123 70.6022 27.8415 80.9915 40.3627C84.4183 44.4713 88.0938 48.37 91.5264 52.4761C92.3605 53.4363 92.846 54.65 92.9046 55.9205C92.839 57.7905 90.6383 58.5144 88.8708 57.2273C87.1053 55.9398 85.4715 54.4809 83.993 52.8718C71.7326 39.5167 59.5027 26.1337 47.3036 12.723C46.5751 11.9255 45.8596 11.1182 44.7951 9.92891Z" fill="currentColor"/>
    </svg>
  )
);
ArrowSingleUpDoodle.displayName = "ArrowSingleUpDoodle";
export const ArrowSingleUpDoodleMetadata = { 
  id: "arrow-single-up_doodle", 
  baseId: "arrow-single-up", 
  variant: "doodle", 
  name: "Arrow Single Up", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 93 59" 
} as const;

export default ArrowSingleUpDoodle;
