import Layout from '../components/layout';
import Head from 'next/head';
import { TOKEN, DATABASE_ID } from "../config";
import ProjectItem from '../components/projects/project-item';

export default function Projects({projects}){

    //클라이언트 단에서 log 찍힘
    //console.log(projects);

    return(
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen px-5 py-10 mb-10">
            <Head>
                <title>포트폴리오</title>
                <meta name="description" content="오늘도 열심히" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="text-4xl font-bold sm:text-6xl">
                총 프로젝트 : 
                <span className="pl-4 text-blue-500">{projects.results.length}</span>
            </h1>
            <div className="grid gird-cols-1 md:grid-cols-2 gap-8 w-full m-6 py-10">
                {projects.results.map((aProject)=>(
                    <ProjectItem key={aProject.id} data={aProject}/>
                ))}
            </div>
            </div>
        </Layout>
    );  
}

// 빌드 타임에 호출
export async function getStaticProps() {

    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Notion-Version': '2022-06-28',
          'content-type': 'application/json'
          // 이부분 notion docs에서 붙여넣기 할 때는 없었는데 영상에 있어서 임의로 추가
          , Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            //정렬
            sorts: [
                {
                    "property": "이름",
                    "direction": "ascending"
                }
            ],
            page_size: 100
        })
    };
    
    // 다 받아질때까지 기다리는겨
    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
    
    const projects = await res.json()



    const projectNames = projects.results.map((aProject) => (
        aProject.properties.이름.title[0].plain_text
    ))

    console.log(`projectNames : ${projectNames}`);

    return {
      props: {projects}, // will be passed to the page component as props
    }
}