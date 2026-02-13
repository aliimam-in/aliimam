import { Grid5 } from "./gallery";
import {
  getBackgroundsNeonImages,
  getBackgroundsNoiseImages,
  getBackgroundsOilPaintImages,
  getBackgroundsSolarizeImages,
} from "@/src/lib/cloudinary";
import { Button } from "@/registry/aliimam/ui/button";
import Link from "next/link";

export async function NeonBackgrounds() {
  const data = await getBackgroundsNeonImages();

  return (
    <main className="pt-10">
      <Link
        href={
          "https://www.jioaicloud.com/l/?u=H4odKkQtbZ4CD2iHzpvL59chzNq5QM4m6EWETrNiYrY=hkW"
        }
        target="_blank"
      >
        <Button>Download All</Button>
      </Link>
      <div className="mt-6">
        <Grid5 images={data.resources} />
      </div>
    </main>
  );
}

export async function SolarizeBackgrounds() {
  const data = await getBackgroundsSolarizeImages();

  return (
     <main className="pt-10">
      <Link
        href={
          "https://www.jioaicloud.com/l/?u=FOpZBgs8cx-a1pQaPwK8bJ3AMJL_Er2b0H1_YMBAoVs=jqE"
        }
        target="_blank"
      >
        <Button>Download All</Button>
      </Link>
      <div className="mt-6">
        <Grid5 images={data.resources} />
      </div>
    </main>
  );
}

export async function OilPaintBackgrounds() {
  const data = await getBackgroundsOilPaintImages();

  return (
    <main className="pt-10">
      <Link
        href={
          "https://www.jioaicloud.com/l/?u=pX4Tvp-6HZchJqG7mVRTIamQOn_9XzYEkIVlPirn2zU=o8v"
        }
        target="_blank"
      >
        <Button>Download All</Button>
      </Link>
      <div className="mt-6">
        <Grid5 images={data.resources} />
      </div>
    </main>
  );
}

export async function NoiseBackgrounds() {
  const data = await getBackgroundsNoiseImages();

  return (
     <main className="pt-10">
      <Link
        href={
          "https://www.jioaicloud.com/l/?u=Sb0f0xOVc4QPuEla8jjkPaQy5Nzu_2MRDd3PndOAdyA=VaU"
        }
        target="_blank"
      >
        <Button>Download All</Button>
      </Link>
      <div className="mt-6">
        <Grid5 images={data.resources} />
      </div>
    </main>
  );
}
