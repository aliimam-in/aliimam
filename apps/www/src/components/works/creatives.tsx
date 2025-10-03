import { Grid5, Grid3, Grid4 } from "@/src/components/common/gallery";
import { getFestiveImages, getCreativeImages, getCampaignsImages, get3DImages, getPackagingImages, getUIUXImages, getLogosImages, getMusicImages, getOthersImages } from "@/src/lib/cloudinary";

export async function Festive() {
  const data = await getFestiveImages();

  return (
    <main>
      <Grid5 images={data.resources} />
    </main>
  );
}

export async function Creatives() {
  const data = await getCreativeImages();

  return (
    <main>
      <Grid5 images={data.resources} />
    </main>
  );
}

export async function Campaigns() {
  const data = await getCampaignsImages();

  return (
    <main>
      <Grid3 images={data.resources} />
    </main>
  );
}

export async function Modals() {
  const data = await get3DImages();

  return (
    <main>
      <Grid4 images={data.resources} />
    </main>
  );
}

export async function Packaging() {
  const data = await getPackagingImages();

  return (
    <main>
      <Grid5 images={data.resources} />
    </main>
  );
}

export async function UIUX() {
  const data = await getUIUXImages();

  return (
    <main>
      <Grid4 images={data.resources} />
    </main>
  );
}

export async function Logos() {
  const data = await getLogosImages();

  return (
    <main>
      <Grid5 images={data.resources} />
    </main>
  );
}

export async function Music() {
  const data = await getMusicImages();

  return (
    <main>
      <Grid3 images={data.resources} />
    </main>
  );
}

export async function Others() {
  const data = await getOthersImages();

  return (
    <main>
      <Grid3 images={data.resources} />
    </main>
  );
}

