import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
  secure: true,
});

export { cloudinary }


export async function getBackgroundsNeonImages() {
  return await cloudinary.search
    .expression('folder:graphics/Backgrounds/Neon/*')
    .sort_by('created_at', 'desc')
    .max_results(400)
    .execute();
}

export async function getBackgroundsNoiseImages() {
  return await cloudinary.search
    .expression('folder:graphics/Backgrounds/Noise/*')
    .sort_by('created_at', 'desc')
    .max_results(400)
    .execute();
}
 
export async function getBackgroundsOilPaintImages() {
  return await cloudinary.search
    .expression('folder:graphics/Backgrounds/OilPaint/*')
    .sort_by('created_at', 'desc')
    .max_results(400)
    .execute();
}
 
export async function getBackgroundsSolarizeImages() {
  return await cloudinary.search
    .expression('folder:graphics/Backgrounds/Solarize/*')
    .sort_by('created_at', 'desc')
    .max_results(400)
    .execute();
}
 
 
 


export async function getFestiveImages() {
  return await cloudinary.search
    .expression('folder:creatives/festive/*')
    .sort_by('created_at', 'desc')
    .max_results(400)
    .execute();
}

export async function getPackagingImages() {
  return await cloudinary.search
    .expression('folder:creatives/packaging/*')
    .sort_by('created_at', 'desc')
    .max_results(400)
    .execute();
}

export async function getLogosImages() {
  return await cloudinary.search
    .expression('folder:creatives/logos/*')
    .sort_by('created_at', 'desc')
    .max_results(400)
    .execute();
}

export async function getUIUXImages() {
  return await cloudinary.search
    .expression('folder:creatives/uiux/*')
    .sort_by('created_at', 'desc')
    .max_results(400)
    .execute();
}

export async function getMusicImages() {
  return await cloudinary.search
    .expression('folder:creatives/music/*')
    .sort_by('created_at', 'desc')
    .max_results(400)
    .execute();
}

export async function getOthersImages() {
  return await cloudinary.search
    .expression('folder:creatives/others/*')
    .sort_by('created_at', 'desc')
    .max_results(400)
    .execute();
}

export async function getCampaignsImages() {
  return await cloudinary.search
    .expression('folder:creatives/campaigns/*')
    .sort_by('created_at', 'desc')
    .max_results(400)
    .execute();
}

export async function getReelsImages() {
  return await cloudinary.search
    .expression('folder:creatives/reels/*')
    .sort_by('created_at', 'desc')
    .max_results(400)
    .execute();
}

export async function getVideosImages() {
  return await cloudinary.search
    .expression('folder:creatives/vid/*')
    .sort_by('created_at', 'desc')
    .max_results(400)
    .execute();
}

export async function get3DImages() {
  return await cloudinary.search
    .expression('folder:creatives/3d/*')
    .sort_by('created_at', 'desc')
    .max_results(400)
    .execute();
}

export async function getCreativeImages() {
  return await cloudinary.search
    .expression('folder:creatives/creative/*')
    .sort_by('created_at', 'desc')
    .max_results(400)
    .execute();
}