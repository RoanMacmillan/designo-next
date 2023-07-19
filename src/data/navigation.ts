// data.ts
export type NavigationData = {
    heading: string;
    link: string;
    image: string;
  }
  
  const navigationData: NavigationData[] = [
    {
      heading: "web design",
      link: "/web-design",
      image: "/assets/images/home/mobile/image-web-design.jpg",
    },
    {
      heading: "app design",
      link: "/app-design",
      image: "/assets/images/home/mobile/image-app-design.jpg",
    },
    {
      heading: "graphic design",
      link: "/graphic-design",
      image: "/assets/images/home/mobile/image-graphic-design.jpg",
    },
  ];
  
  export default navigationData;
  