import Head from "next/head";
import Image from "next/image";

const experiences = [
  {
    company: "Free",
    logo: "/logo_free.png",
    role: "développeur full-stack - Product Owner technique",
  },
  {
    company: "Palo IT Singapour",
    logo: "/logo_palo_it.svg",
    role: "lead développeur full-stack",
  },
  {
    company: "SOAT",
    logo: "/logo-soat.webp",
    role: "développeur full-stack",
  },
  {
    company: "Sopra Steria",
    logo: "/logo-sopra.png",
    role: "développeur full-stack",
  },
];

export default function Home() {
  // const getRandomColorGradiant = () => {
  //   const MIN_GRADIENT = 3
  //   const MAX_GRADIENT = 9
  //
  //   return (Math.floor(Math.random() * (MAX_GRADIENT - MIN_GRADIENT + 1)) + MIN_GRADIENT) * 100
  // }

  return (
    <div className="min-h-screen bg-darkGray text-white">
      <Head>
        <title>Baptiste Bordet</title>
        <meta name="description" content="Baptiste Bordet - Développeur Web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>Baptiste BORDET</h1>
      </header>

      <main className="container">
        {experiences.map(({ company, logo, role }, index) => (
          <div className="flex flex-col justify-center items-center" key={index}>
            <div
              className={`p-1 rounded-lg bg-gradient-to-r from-blue-900 to-blue-500 w-full`}
            >
              <div className="bg-darkGray rounded-lg p-4">
                <div className="flex items-center">
                  <div className="relative w-20 h-20">
                    <Image
                      src={logo}
                      alt={company}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <h2 className="text-4xl ml-3">{company}</h2>
                </div>
                <span>{role}</span>
              </div>
            </div>
            {index < experiences.length - 1 && <div className="flex justify-center w-1 h-4 bg-blue-700" />}
          </div>
        ))}
      </main>

      <footer>
        <span>lien linkedin</span>
        <span>lien insta</span>
      </footer>
    </div>
  );
}
