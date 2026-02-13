 
"use client";

import { PhotoProvider, PhotoView } from "react-photo-view";

import "react-photo-view/dist/react-photo-view.css";

import { CldImage } from "next-cloudinary";
 

type ImageType = {
  secure_url: string;
  id?: string;
};

export { CldImage }
 
export function Grid2({ images }: { images: ImageType[] }) {
  return (
    <>
      <PhotoProvider>
        <div className="grid items-stretch gap-1 md:gap-2 md:grid-cols-2">
          {images.map((image: ImageType) => (
            <PhotoView key={image.secure_url}  src={image.secure_url}>
              <CldImage
                src={image.secure_url}
                alt={image.secure_url}
                loading="lazy"
                width={700}
                height={600}
                className="rounded-xl object-cover hover:cursor-zoom-in hover:saturate-0"
              />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </>
  );
}

export function Grid4({ images }: { images: ImageType[] }) {
  return (
    <>
      <PhotoProvider>
        <div className="grid grid-cols-2 items-stretch gap-1 md:gap-2 md:grid-cols-4">
          {images.map((image: ImageType) => (
            <PhotoView key={image.secure_url} src={image.secure_url}>
              <CldImage
                src={image.secure_url}
                alt={image.secure_url}
                loading="lazy"
                width={500}
                height={500}
                className="rounded object-cover hover:cursor-zoom-in hover:saturate-0"
              />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </>
  );
} 

export function Grid3({ images }: { images: ImageType[] }) {
  return (
    <>
      <PhotoProvider>
        <div className="grid grid-cols-2 items-stretch gap-1 md:gap-2 md:grid-cols-3">
          {images.map((image: ImageType) => (
            <PhotoView key={image.secure_url} src={image.secure_url}>
              <CldImage
                src={image.secure_url}
                alt={image.secure_url}
                loading="lazy"
                width={500}
                height={500}
                className="rounded object-cover hover:cursor-zoom-in hover:saturate-0"
              />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </>
  );
} 

export function Grid5({ images }: { images: ImageType[] }) {
  return (
    <>
      <PhotoProvider>
        <div className="grid grid-cols-3 items-stretch gap-1 md:gap-2 md:grid-cols-4 lg:grid-cols-5">
          {images.map((image: ImageType) => (
            <PhotoView key={image.secure_url} src={image.secure_url}>
              <CldImage
                src={image.secure_url}
                alt={image.secure_url}
                loading="lazy"
                width={500}
                height={500}
                className="rounded object-cover hover:cursor-zoom-in hover:saturate-0"
              />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </>
  );
} 