const getProductImage = (image: string) => {
  try {
    const url = new URL(image);
    if (url.origin !== "https://fakestoreapi.com" || !url.pathname.startsWith("/img/") || url.search) return null;

    return url.href;
  } catch {
    return null;
  }
};

export default getProductImage;
