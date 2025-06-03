import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import Hbo_nav from "@/components/molecules/navbar";
import Carousel from "@/components/molecules/Carousel";
import { B_item } from "@/components/atoms/miniatura_mia";
import { Movie_row } from "@/components/molecules/Movie_row";
import { Continue_section } from "@/components/molecules/Continue_section";
import { Top10_row } from "@/components/molecules/Top10_row";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  // Define the two arrays using your existing links and tags:
  const itemsGroup1 = [{
    Link_image: "https://images.cdn.prd.api.discomax.com/2023/10/01/e7af3b34-8c0f-3e53-adbe-d74209a790ce.jpeg?w=300&f=webp",
    tag: ""
  },
  {
    Link_image: "https://images.cdn.prd.api.discomax.com/2025/05/21/0e477ae5-8b8d-36ab-a2b3-f76b9b9578fe.jpeg?w=250&f=webp",
    tag: "Nuevo"
  },
  {
    Link_image: "https://images.cdn.prd.api.discomax.com/2024/08/19/779caa0a-d28f-373f-ac38-b592223cb6cb.jpeg?w=300&f=webp",
    tag: ""
  },
  {
    Link_image: "https://images.cdn.prd.api.discomax.com/2025/05/01/f53824f5-5377-3343-a01d-580e2ac63794.jpeg?w=1300&f=webp",
    tag: "Nuevo"
  },
  {
    Link_image: "https://images.cdn.prd.api.discomax.com/2025/05/21/dedbe28a-40cf-3bb6-b2c5-7639852f2cd6.jpeg?w=1300&f=webp",
    tag: ""
  },
  {
    Link_image: "https://images.cdn.prd.api.discomax.com/2025/05/21/bd8ee24f-081e-321c-8b31-615fead89e37.jpeg?w=1300&f=webp",
    tag: ""
  },
  ];

  const itemsGroup2 = [{
    Link_image: "https://images.cdn.prd.api.discomax.com/2025/04/07/3828d049-fc52-340f-aa53-c46b86298a6a.jpeg?w=1300&f=webp",
    tag: ""
  },
  {
    Link_image: "https://images.cdn.prd.api.discomax.com/2025/05/21/4fb0bcde-0fef-3c1b-b6bb-20e545b65c2e.jpeg?w=300&f=webp",
    tag: ""
  },
  {
    Link_image: "https://images.cdn.prd.api.discomax.com/2025/05/21/55a8fce7-456d-3abc-9479-c118e47b15c7.jpeg?w=1300&f=webp",
    tag: "Nuevo Episodio"
  },
  {
    Link_image: "https://images.cdn.prd.api.discomax.com/2025/03/04/060a8786-b072-3ac7-aa6e-f71f311599fd.jpeg?",
    tag: "Nuevo"
  },
  {
    Link_image: "https://images.cdn.prd.api.discomax.com/2024/07/19/bc322f96-79bc-38c8-bf04-f888b13be43c.jpeg?w=1300&f=webp",
    tag: ""
  },
  { Link_image: "https://images.cdn.prd.api.discomax.com/2025/05/21/061caaa3-45e2-37ee-af00-6c10a83a0844.jpeg?w=300&f=webp", tag: "" },
  ];

  const itemsGroup3 = [{
    Link_image: "https://images.cdn.prd.api.discomax.com/2025/05/06/721b5c68-e4b1-38a2-97dc-a988b9d5a5c0.jpeg?w=1300&f=webp",
    tag: "Nuevo"
  },
  {
    Link_image: "https://images.cdn.prd.api.discomax.com/2025/04/07/4b705b57-a2b6-37a8-83e0-9e800f98cdb3.jpeg?w=1300&f=webp",
    tag: ""
  },
  {
    Link_image: "https://images.cdn.prd.api.discomax.com/2024/07/01/40ab5d5c-bcdb-314d-b53a-a2c1527955db.jpeg?w=1300&f=webp",
    tag: ""
  },
  {
    Link_image: "https://images.cdn.prd.api.discomax.com/2025/03/28/7c764936-e6b1-3e5c-b964-e15f5e8c8f26.jpeg?w=1300&f=webp",
    tag: ""
  },
  {
    Link_image: "https://images.cdn.prd.api.discomax.com/2025/04/25/7cf30aba-9435-3b93-86c9-f3f14835708d.jpeg?w=1300&f=webp",
    tag: ""
  },
  {
    Link_image: "https://images.cdn.prd.api.discomax.com/2024/03/06/5dba901e-6b48-355b-91bf-b152ed995c6c.jpeg?w=1300&f=webp",
    tag: ""
  },
  ];

  const itemsGroup4 = [{
    Link_image: "https://images.cdn.prd.api.discomax.com/2025/01/29/989253f0-dc84-349d-b614-f50d547d7bd7.jpeg?w=1300&f=webp",
    tag: "Nuevo episodio"
  },
  {
    Link_image: "https://images.cdn.prd.api.discomax.com/2025/02/20/504a2a1c-c894-3f3e-b4a1-c98a3f02132b.jpeg?w=1300&f=webp",
    tag: "Nuevo"
  },
  {
    Link_image: "https://images.cdn.prd.api.discomax.com/2024/09/22/0c21c342-e8d1-3d27-a42f-b1881b0aad9c.jpeg?w=1300&f=webp",
    tag: ""
  },
  {
    Link_image: "https://images.cdn.prd.api.discomax.com/2024/11/07/8254c0ab-8944-3bfd-a9a2-042ecfef787e.jpeg?w=1300&f=webp",
    tag: ""
  },
  {
    Link_image: "https://images.cdn.prd.api.discomax.com/2025/04/11/9e7c36bd-95f9-36f3-be20-ab3f1c4d3357.jpeg?w=1300&f=webp",
    tag: ""
  },
  { Link_image: "https://images.cdn.prd.api.discomax.com/2025/04/01/39417cfb-0068-39ce-b60a-d2e81ac196e4.jpeg?w=1300&f=webp", tag: "" },
  ];


   const top10Group1 = [
    {
      Link_image:"https://images.cdn.prd.api.discomax.com/2025/04/07/3828d049-fc52-340f-aa53-c46b86298a6a.jpeg?w=1300&f=webp",
      number: 1,
    },
    {
      Link_image: "https://images.cdn.prd.api.discomax.com/2025/03/24/778d3b69-00c8-3f3a-82d2-1672fa523dbe.jpeg?w=1300&f=webp",
      number: 2,
    },
    {
      Link_image: "https://images.cdn.prd.api.discomax.com/2025/01/29/989253f0-dc84-349d-b614-f50d547d7bd7.jpeg?w=1300&f=webp",
      number: 3,
    },
    {
      Link_image: "https://images.cdn.prd.api.discomax.com/2024/08/30/89abbd7f-b5e7-347e-9dd9-39529c187c47.jpeg?w=1300&f=webp",
      number: 4,
    },
    {
      Link_image: "https://images.cdn.prd.api.discomax.com/2024/08/30/61257f87-daac-3e67-b2a4-54f4f7dd7eb1.jpeg?w=200&f=webp",
      number: 5,
    },
  ];

  const top10Group2 = [
    {
      Link_image: "https://images.cdn.prd.api.discomax.com/2025/03/31/d537701e-52c8-3c82-9338-a478b706dd5a.jpeg?w=350&f=webp",
      number: 6,
    },
    {
      Link_image: "https://images.cdn.prd.api.discomax.com/2023/10/12/a0b2a860-b906-3be4-ba75-57b9bb14017c.jpeg?w=350&f=webp",
      number: 7,
    },
    {
      Link_image: "https://images.cdn.prd.api.discomax.com/2024/11/26/bf02199d-d5a8-3af9-b2ef-9678e7506d25.jpeg?w=600&f=webp",
      number: 8,
    },
    {
      Link_image: "https://images.cdn.prd.api.discomax.com/2024/09/06/a1f7bb55-bb24-373a-84a2-12f14ecd3cc9.jpeg?w=250&f=webp",
      number: 9,
    },
    {
      Link_image: "https://images.cdn.prd.api.discomax.com/2024/08/14/68eba161-98b4-33c7-b029-aed3d7b7d928.jpeg?w=300&f=webp",
      number: 10,
    },
  ];


  return (
    <>
      <section>
        <Hbo_nav />
        <Carousel />
      </section>

      <div><Movie_row
        id_car="hello"
        Title="Destacados"
        itemsGroup1={itemsGroup1}
        itemsGroup2={itemsGroup2}
      />;
      </div>
      <div><Movie_row
        id_car="goodbye"
        Title="Solo para ti"
        itemsGroup1={itemsGroup3}
        itemsGroup2={itemsGroup4}
      />;
      </div>

      <Continue_section
        items={[
          {
            Link_image: "https://images.cdn.prd.api.discomax.com/2025/05/06/1eec5f84-00a4-3f7a-83d7-50a1877ebc3c.jpeg?w=1300&f=webp",
            title: "Robot Salvaje",
            year: 2024,
            age: "7+",
            progress: 40,
            isSerie: false
          },
          {
            Link_image: "https://4kwallpapers.com/images/walls/thumbs_3t/21983.jpg",
            title: "The Last of Us",
            year: 2023,
            age: "16+",
            progress: 80,
            isSerie: true,
            temporada: 2,
            episodio: 7,
            episodeTitle: "Convergencia"
          },
          {
            Link_image: "https://4kwallpapers.com/images/walls/thumbs_3t/8238.jpg",
            title: "House of the Dragon",
            year: 2022,
            age: "18+",
            progress: 60,
            isSerie: true,
            temporada: 1,
            episodio: 4,
            episodeTitle: "Sangre Real"
          },
          {
            Link_image: "https://4kwallpapers.com/images/walls/thumbs_3t/22621.jpg",
            title: "Ironheart",
            year: 2025,
            age: "12+",
            progress: 30,
            isSerie: false
          }
        ]}
      />
      
      {/* Aquí insertamos el Top 10 */}
      <div className="mt-10">
        <Top10_row
          id_car="top10Carousel"
          Title="Top 10 Películas Hoy"
          itemsGroup1={top10Group1}
          itemsGroup2={top10Group2}
        />
      </div>

    </>
  );
}
