import React, { useState } from "react";
import { Download, Copy, Check, ChevronDownIcon } from "lucide-react";
import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";

interface LogoDownloadButtonGroupProps {
  selectedIcon: {
    name: string;
    Component: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    type: string;
  };
  size: number;
  color: string;
}

export function LogoDownloadPanel({
  selectedIcon,
  size,
  color,
}: LogoDownloadButtonGroupProps) {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  const getSVGString = (exportSize: number) => {
    const iconElement = document.getElementById("preview-icon");
    if (!iconElement) return null;

    const clonedIcon = iconElement.cloneNode(true) as SVGElement;
    clonedIcon.setAttribute("width", exportSize.toString());
    clonedIcon.setAttribute("height", exportSize.toString());
    clonedIcon.style.color = color; 

    const serializer = new XMLSerializer();
    return serializer.serializeToString(clonedIcon);
  };

  const download = (format: "svg" | "png" | "jpg") => {
    const exportSize = size;
    const svgString = getSVGString(exportSize);
    if (!svgString) return;

    if (format === "svg") {
      const blob = new Blob([svgString], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${selectedIcon.name}-${exportSize}px.svg`;
      link.click();
      URL.revokeObjectURL(url);
    } else {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = exportSize;
      canvas.height = exportSize;

      if (format === "jpg") {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, exportSize, exportSize);
      }

      const img = new Image();
      const svgBlob = new Blob([svgString], {
        type: "image/svg+xml;charset=utf-8",
      });
      const url = URL.createObjectURL(svgBlob);

      img.onload = () => {
        ctx.drawImage(img, 0, 0, exportSize, exportSize);
        canvas.toBlob(
          (blob) => {
            if (blob) {
              const downloadUrl = URL.createObjectURL(blob);
              const link = document.createElement("a");
              link.href = downloadUrl;
              link.download = `${selectedIcon.name}-${exportSize}px.${format}`;
              link.click();
              URL.revokeObjectURL(downloadUrl);
            }
          },
          format === "png" ? "image/png" : "image/jpeg",
          1.0
        );
        URL.revokeObjectURL(url);
      };

      img.src = url;
    }
  };

  const copy = async (format: "svg" | "png" | "jpg") => {
    const exportSize = size;
    const svgString = getSVGString(exportSize);
    if (!svgString) return;

    if (format === "svg") {
      try {
        await navigator.clipboard.writeText(svgString);
        setCopiedFormat("svg");
        setTimeout(() => setCopiedFormat(null), 2000);
      } catch (err) {
        console.error("Failed to copy SVG:", err);
      }
    } else {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = exportSize;
      canvas.height = exportSize;

      if (format === "jpg") {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, exportSize, exportSize);
      }

      const img = new Image();
      const svgBlob = new Blob([svgString], {
        type: "image/svg+xml;charset=utf-8",
      });
      const url = URL.createObjectURL(svgBlob);

      img.onload = async () => {
        ctx.drawImage(img, 0, 0, exportSize, exportSize);
        try {
          canvas.toBlob(
            async (blob) => {
              if (blob) {
                await navigator.clipboard.write([
                  new ClipboardItem({ [blob.type]: blob }),
                ]);
                setCopiedFormat(format);
                setTimeout(() => setCopiedFormat(null), 2000);
              }
            },
            format === "png" ? "image/png" : "image/jpeg"
          );
        } catch (err) {
          console.error(`Failed to copy ${format.toUpperCase()}:`, err);
        }
        URL.revokeObjectURL(url);
      };

      img.src = url;
    }
  };

  return (
    <div className="px-4 grid gap-2">
      <div className="inline-flex divide-x divide-primary-foreground/30 rtl:space-x-reverse">
        <Button
          onClick={() => download("svg")}
          className="rounded-none w-43 shadow-none first:rounded-s-md focus-visible:z-10 text-xs"
        >
          <Download className="opacity-60 mr-1" size={16} aria-hidden="true" />
          Download
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="rounded-none shadow-none last:rounded-e-md focus-visible:z-10"
              size="icon"
              aria-label="Download options"
            >
              <ChevronDownIcon size={16} aria-hidden="true" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" side="bottom">
            <DropdownMenuItem onClick={() => download("svg")}>
              SVG
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => download("png")}>
              PNG
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => download("jpg")}>
              JPG
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="">
        <Button
          variant={"outline"}
          onClick={() => copy("svg")}
          className="rounded-none w-43 shadow-none first:rounded-s-md focus-visible:z-10 text-xs"
        >
          {copiedFormat === "svg" ? (
            <Check className="opacity-60 mr-1" size={16} aria-hidden="true" />
          ) : (
            <Copy className="opacity-60 mr-1" size={16} aria-hidden="true" />
          )}
          Copy Icon
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={"outline"}
              className="rounded-none shadow-none last:rounded-e-md focus-visible:z-10"
              size="icon"
              aria-label="Copy options"
            >
              <ChevronDownIcon size={16} aria-hidden="true" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" side="bottom">
            <DropdownMenuItem onClick={() => copy("svg")}>
              SVG {copiedFormat === "svg" && <Check className="w-4 h-4 ml-2" />}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => copy("png")}>
              PNG {copiedFormat === "png" && <Check className="w-4 h-4 ml-2" />}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => copy("jpg")}>
              JPG {copiedFormat === "jpg" && <Check className="w-4 h-4 ml-2" />}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

interface IconDownloadButtonGroupProps {
  selectedIcon: {
    name: string;
    Component: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    type: string;
  };
  size: number;
  color: string;
  strokeWidth?: number;
}

export function IconDownloadPanel({
  selectedIcon,
  size,
  color,
  strokeWidth,
}: IconDownloadButtonGroupProps) {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  const getSVGString = (exportSize: number) => {
    const iconElement = document.getElementById("preview-icon");
    if (!iconElement) return null;

    const clonedIcon = iconElement.cloneNode(true) as SVGElement;
    clonedIcon.setAttribute("width", exportSize.toString());
    clonedIcon.setAttribute("height", exportSize.toString());
    clonedIcon.style.color = color;
    clonedIcon.style.stroke = color;

    if (strokeWidth !== undefined) {
      clonedIcon.style.strokeWidth = strokeWidth.toString();
    }

    const serializer = new XMLSerializer();
    return serializer.serializeToString(clonedIcon);
  };

  const download = (format: "svg" | "png" | "jpg") => {
    const exportSize = size;
    const svgString = getSVGString(exportSize);
    if (!svgString) return;

    if (format === "svg") {
      const blob = new Blob([svgString], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${selectedIcon.name}-${selectedIcon.type}-${exportSize}px.svg`;
      link.click();
      URL.revokeObjectURL(url);
    } else {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = exportSize;
      canvas.height = exportSize;

      if (format === "jpg") {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, exportSize, exportSize);
      }

      const img = new Image();
      const svgBlob = new Blob([svgString], {
        type: "image/svg+xml;charset=utf-8",
      });
      const url = URL.createObjectURL(svgBlob);

      img.onload = () => {
        ctx.drawImage(img, 0, 0, exportSize, exportSize);
        canvas.toBlob(
          (blob) => {
            if (blob) {
              const downloadUrl = URL.createObjectURL(blob);
              const link = document.createElement("a");
              link.href = downloadUrl;
              link.download = `${selectedIcon.name}-${selectedIcon.type}-${exportSize}px.${format}`;
              link.click();
              URL.revokeObjectURL(downloadUrl);
            }
          },
          format === "png" ? "image/png" : "image/jpeg",
          1.0
        );
        URL.revokeObjectURL(url);
      };

      img.src = url;
    }
  };

  const copy = async (format: "svg" | "png" | "jpg") => {
    const exportSize = size;
    const svgString = getSVGString(exportSize);
    if (!svgString) return;

    if (format === "svg") {
      try {
        await navigator.clipboard.writeText(svgString);
        setCopiedFormat("svg");
        setTimeout(() => setCopiedFormat(null), 2000);
      } catch (err) {
        console.error("Failed to copy SVG:", err);
      }
    } else {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = exportSize;
      canvas.height = exportSize;

      if (format === "jpg") {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, exportSize, exportSize);
      }

      const img = new Image();
      const svgBlob = new Blob([svgString], {
        type: "image/svg+xml;charset=utf-8",
      });
      const url = URL.createObjectURL(svgBlob);

      img.onload = async () => {
        ctx.drawImage(img, 0, 0, exportSize, exportSize);
        try {
          canvas.toBlob(
            async (blob) => {
              if (blob) {
                await navigator.clipboard.write([
                  new ClipboardItem({ [blob.type]: blob }),
                ]);
                setCopiedFormat(format);
                setTimeout(() => setCopiedFormat(null), 2000);
              }
            },
            format === "png" ? "image/png" : "image/jpeg"
          );
        } catch (err) {
          console.error(`Failed to copy ${format.toUpperCase()}:`, err);
        }
        URL.revokeObjectURL(url);
      };

      img.src = url;
    }
  };

  return (
    <div className="px-4 grid gap-2">
      <div className="inline-flex divide-x divide-primary-foreground/30 rtl:space-x-reverse">
        <Button
          onClick={() => download("svg")}
          className="rounded-none w-43 shadow-none first:rounded-s-md focus-visible:z-10 text-xs"
        >
          <Download className="opacity-60 mr-1" size={16} aria-hidden="true" />
          Download
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="rounded-none shadow-none last:rounded-e-md focus-visible:z-10"
              size="icon"
              aria-label="Download options"
            >
              <ChevronDownIcon size={16} aria-hidden="true" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" side="bottom">
            <DropdownMenuItem onClick={() => download("svg")}>
              SVG
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => download("png")}>
              PNG
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => download("jpg")}>
              JPG
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="">
        <Button
          variant={"outline"}
          onClick={() => copy("svg")}
          className="rounded-none w-43 shadow-none first:rounded-s-md focus-visible:z-10 text-xs"
        >
          {copiedFormat === "svg" ? (
            <Check className="opacity-60 mr-1" size={16} aria-hidden="true" />
          ) : (
            <Copy className="opacity-60 mr-1" size={16} aria-hidden="true" />
          )}
          Copy Icon
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={"outline"}
              className="rounded-none shadow-none last:rounded-e-md focus-visible:z-10"
              size="icon"
              aria-label="Copy options"
            >
              <ChevronDownIcon size={16} aria-hidden="true" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" side="bottom">
            <DropdownMenuItem onClick={() => copy("svg")}>
              SVG {copiedFormat === "svg" && <Check className="w-4 h-4 ml-2" />}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => copy("png")}>
              PNG {copiedFormat === "png" && <Check className="w-4 h-4 ml-2" />}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => copy("jpg")}>
              JPG {copiedFormat === "jpg" && <Check className="w-4 h-4 ml-2" />}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
