import Head from "next/head"
import Layout from "@components/layout"
import GeneralInformation from "@components/generalInformation"
import ProjectsAndSkills from "@components/projectsAndSkill"

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/logo192.png" />

        <link rel="manifest" href="/manifest.json" />

        <title>Divyansh Kaushik | Front-End Developer</title>
        <meta
          name="description"
          content="Divyansh Kaushik is a Front-End Developer based in Austin, TX who specializes in building websites and applications."
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta
          itemprop="name"
          content="Divyansh Kaushik | Front-End Developer"
        />
        <meta
          itemprop="description"
          content="Divyansh Kaushik is a Front-End Developer based in Austin, TX who specializes in building websites and applications."
        />
        <meta itemprop="image" content="/demo.png" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://www.kaushikdivyansh.dev" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Divyansh Kaushik | Front-End Developer"
        />
        <meta
          property="og:description"
          content="Divyansh Kaushik is a Front-End Developer based in Austin, TX who specializes in building websites and applications."
        />
        <meta property="og:image" content="/demo.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Divyansh Kaushik | Front-End Developer"
        />
        <meta
          name="twitter:description"
          content="Divyansh Kaushik is a Front-End Developer based in Austin, TX who specializes in building websites and applications."
        />
        <meta name="twitter:image" content="/demo.png" />
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-138577500-3"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || []; function gtag(){" "}
            {dataLayer.push(arguments)}
            gtag("js", new Date()); gtag("config", "UA-138577500-3");`,
          }}
        ></script>
      </Head>

      <Layout>
        <GeneralInformation />
        <ProjectsAndSkills />
      </Layout>
    </div>
  )
}
