import cloudinary from "@/lib/cloudinary";
import { Grid5BG } from "@/components/common/gallery";

export default async function Numbers() {
  const data = await cloudinary.v2.search
    .expression(`folder:products/3dicons/gradient/numbers/*`)
    .sort_by("created_at", "desc")
    .max_results(400)
    .execute();

  return (
    <main className="">
      <Grid5BG images={data.resources} />
    </main>
  );
}