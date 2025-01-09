export interface BannerVideoProps {
  object: {
    slug: string;
    title: string;
    type: string;
    metadata: {
      videobannermp4: {
        url: string;
      };
      videobannerweb: {
        url: string;
      };
    };
  };
}
