import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import Date from '../components/date';

export default function Home() {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>Aqui eu vou falar um pouco de mim e dos projetos que eu desenvolvi.</p>
      </section>
      <Date dateString='2021-06-28'></Date>
    </Layout>
  )



}
