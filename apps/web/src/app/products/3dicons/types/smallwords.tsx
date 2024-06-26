import cloudinary from "@/lib/cloudinary";
import { Grid5BG } from "@/components/common/gallery";

export default async function SmallWords() {
  const data = await cloudinary.v2.search
    .expression(`folder:products/3dicons/gradient/smallwords/*`)
    .sort_by("created_at", "desc")
    .max_results(400)
    .execute();

  return (
    <main className="">
      <Grid5BG images={data.resources} />
    </main>
  );
}
