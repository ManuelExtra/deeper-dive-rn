const GOOGLE_API_KEY = 'AIzaSyAsD0j5EgXvOQ8HSF7iiOyd90ynB0jb8hE';

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap
  &markers=color:red%7Clabel:S%7C${lat},${lng}
  &key=${GOOGLE_API_KEY}`;

  return imagePreviewUrl;
}
