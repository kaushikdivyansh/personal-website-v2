import Head from "next/head"
import Layout from "@components/layout"
import GeneralInformation from "@components/generalInformation"
import ProjectsAndSkills from "@components/projectsAndSkill"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <GeneralInformation />
        <ProjectsAndSkills />
      </Layout>
    </div>
  )
}
