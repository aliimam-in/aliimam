/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ParkingMeterProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ParkingMeter = React.forwardRef<SVGSVGElement, ParkingMeterProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M11 15h2" />
  <path d="M12 12v3" />
  <path d="M12 19v3" />
  <path d="M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z" />
  <path d="M9 9a3 3 0 1 1 6 0" />
    </svg>
  )
);
ParkingMeter.displayName = "ParkingMeter";
export const ParkingMeterMetadata = { 
  id: "parking-meter", 
  baseId: "parking-meter", 
  variant: "default", 
  name: "Parking Meter", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ParkingMeter;
