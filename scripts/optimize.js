import fs from "fs";
import path from "path";
import sharp from "sharp";

const imagesDir = "./public/images";

async function optimizeImages() {
  try {
    const files = fs.readdirSync(imagesDir);
    const webpFiles = files.filter(f => f.endsWith(".webp"));

    console.log(`Found ${webpFiles.length} WebP images to optimize...`);

    for (const file of webpFiles) {
      const filePath = path.join(imagesDir, file);
      const buffer = fs.readFileSync(filePath);
      
      console.log(`Optimizing ${file}...`);
      
      let transform = sharp(buffer);
      
      if (file === "logo.webp") {
        // Logo is displayed at 40x40, resize to 80px width for retina screens
        transform = transform.resize({ width: 80 }).webp({ quality: 75, effort: 6 });
      } else if (file === "arborist_hero_new.webp") {
        // Hero background image, resize to 1200px width for desktop displays
        transform = transform.resize({ width: 1200 }).webp({ quality: 70, effort: 6 });
      } else {
        // Standard card/split section images, resize to 800px width
        transform = transform.resize({ width: 800 }).webp({ quality: 70, effort: 6 });
      }

      await transform.toFile(filePath);
    }

    console.log("All WebP images successfully resized and optimized!");
  } catch (error) {
    console.error("Error optimizing images:", error);
  }
}

optimizeImages();
