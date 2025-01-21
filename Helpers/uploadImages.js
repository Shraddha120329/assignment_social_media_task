import cloudinary from "cloudinary";

const uploadImages = async (imageFiles) => {
    const uploadPromises = imageFiles.map(async (image) => {

        const base64 = Buffer.from(image.buffer).toString("base64");

        let dataURI = "data:" + image.mimetype + ";base64," + base64;

        const res = await cloudinary.v2.uploader.upload(dataURI);

        return res.url;
    });

    const imageUrls = await Promise.all(uploadPromises);
    return imageUrls;
};

export { uploadImages };