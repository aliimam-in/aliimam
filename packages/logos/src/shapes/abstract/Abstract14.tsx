import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Abstract14: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Abstract14(
  {
    color = "currentColor",
    fill,
    size = 24,
    strokeWidth,
    strokeLinecap,
    strokeLinejoin,
    strokeDasharray,
    opacity,
    className,
    ...props
  },
  forwardedRef,
) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      strokeDasharray={strokeDasharray}
      opacity={opacity}
      {...props}
      ref={forwardedRef}
    >
      <path
        d="M16.3582 8.65201V4.42239L20.0586 6.5372V10.7668L16.3582 8.65201ZM20.0606 17.4609L16.3601 19.5757V15.3461L20.0606 13.2313V17.4609ZM10.5019 22.9227L6.80142 20.8079L10.5019 18.6931L14.2024 20.8079L10.5019 22.9227ZM0.943263 13.2313L4.64376 15.3461V19.5757L0.943263 17.4609V13.2313ZM0.943263 6.5372L4.64376 4.42239V8.65201L0.943263 10.7668V6.5372ZM14.2024 3.19205L10.5019 5.30499L6.80142 3.19017L10.5019 1.07724L14.2024 3.19205ZM11.4433 5.84361L15.1438 3.72879L15.4168 3.88566V8.11339L11.4433 5.84361ZM5.85816 3.72879L9.55865 5.84361L5.58511 8.11339V3.88566L5.85816 3.72879ZM4.64184 14.2707L0.941352 12.1559V11.8441L4.64184 9.72927V14.2707ZM5.58511 20.1143V15.8847L9.55865 18.1564L5.85816 20.2712L5.58511 20.1143ZM15.4168 20.1143L15.1438 20.2712L11.4433 18.1564L15.4168 15.8866V20.1143ZM16.3582 9.72927L20.0586 11.8441V12.1559L16.3582 14.2707V9.72927ZM15.4168 14.8075L10.5 17.6178L5.5832 14.8075V9.19065L10.5 6.38223L15.4168 9.19065V14.8075ZM16.3582 3.34703L10.5 0L4.64184 3.34703L0 5.99858V17.9995L5.85816 21.3466L10.5 24L15.1418 21.3466L15.3767 21.2124L21 17.9995V5.99858L16.3562 3.34703H16.3582Z"
        fill="#1d1d1b"
      />
    </svg>
  );
});

Abstract14.displayName = "Abstract14";

Abstract14.metadata = {
  name: "Abstract14",
  category: "shapes/abstract",
  tags: ["abstract", "14", "icon"],
  description: "Abstract14 icon from shapes/abstract category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Abstract14;
