export const background_image_url =
  "https://assets.nflxext.com/ffe/siteui/vlv3/031c42b9-0c81-4db5-b980-0160765188e9/27f1b15d-79ed-43ca-8982-7faa9e4aa388/IN-en-20240819-TRIFECTA-perspective_WEB_3c576fa6-cd23-46b6-ac3f-1ad2bb0f66fb_small.jpg";
export const logo_url =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const profile_url =
  "https://avatars.githubusercontent.com/u/156033559?v=4";

export const api_access_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjRhYmIxOGVmYmQwYmI2MzYzZjIwNDgzNGE5NDgwYyIsIm5iZiI6MTcyNDY2MTk3OS40MzYzMDksInN1YiI6IjYxNjEzZTU4OWNhNzU5MDA4OTVhYjZmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bdhz9SD1cioQhXBSVUoxf-HqjqSkPDp8KhXIIL8Dqmo";

export const api_options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${api_access_token}`,
  },
};
