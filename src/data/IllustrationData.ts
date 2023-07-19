// data.ts
export type IllustrationData = {
  image: string;

  heading: string;
  paragraph: string;
};

const illustrationData: IllustrationData[] = [
  {
    image: "/assets/images/home/desktop/illustration-passionate.svg",
    heading: "passionate",
    paragraph:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
  },
  {
    image: "/assets/images/home/desktop/illustration-resourceful.svg",
    heading: "resourceful",
    paragraph:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
  },
  {
    image: "/assets/images/home/desktop/illustration-friendly.svg",
    heading: "friendly",
    paragraph:
      " We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
  },
];

export default illustrationData;
