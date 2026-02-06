export const uploadToImgBB = async (file: File): Promise<string> => {
  const API_KEY = "7d42ded8d4012ee46c754e5dd68d6afc";
  const formData = new FormData();
  formData.append("image", file);

  const response = await fetch(
    `https://api.imgbb.com/1/upload?key=${API_KEY}`,
    {
      method: "POST",
      body: formData,
    }
  );

  const result = await response.json();

  if (result.success) {
    return result.data.url;
  } else {
    throw new Error("Ошибка загрузки в ImgBB");
  }
};
