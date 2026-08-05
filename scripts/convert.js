import fs from "fs";
import path from "path";
import sharp from "sharp";

const imagesDir = "./public/images";

async function convertJpegsToWebp() {
  try {
    const files = fs.readdirSync(imagesDir);
    const jpgFiles = files.filter(f => f.endsWith(".jpg"));
    
    console.log(`Found ${jpgFiles.length} JPEGs to convert to WebP...`);
    
    for (const file of jpgFiles) {
      const inputPath = path.join(imagesDir, file);
      const outputName = file.replace(/\.jpg$/, ".webp");
      const outputPath = path.join(imagesDir, outputName);
      
      console.log(`Converting ${file} -> ${outputName}...`);
      
      // Convert to webp with high quality compression
      await sharp(inputPath)
        .webp({ quality: 80, effort: 6 })
        .toFile(outputPath);
        
      // Remove original JPG file
      fs.unlinkSync(inputPath);
    }
    
    console.log("All images successfully converted and optimized to WebP!");
  } catch (error) {
    console.error("Error converting images:", error);
  }
}

convertJpegsToWebp();
