import { Lesson } from "./Lesson"

//import { gql,useQuery } from '@apollo/client';
import { useGetLessonsQuery } from "../graphql/generated";



// const GET_LESSONS_QUERY = gql`
//     query {
//     lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
//         id
//         availableAt
//         lessonType
//         title
//         slug
//     }
// }
// `

// interface GetLessonsQueryResponse {
//         lessons:{
//         id: string;
//         availableAt: string;
//         lessonType: 'live' | 'class';
//         title:string;
//         slug: string;
//     }[]
// }

//se tiver que trocar um campo tem que rodar o codegen novamente : npm run codegen

export function SideBar(){

    //const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);

    const { data } = useGetLessonsQuery();



    console.log(data);

    return(
        <aside className="w-[380px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma de aulas
            </span>
            <div className="flex flex-col gap-8">
               {
                 data?.lessons.map(lesson => {
                    return  (<Lesson
                    key={lesson.id}
                    title={lesson.title}
                    slug={lesson.slug}
                    availableAt={new Date(lesson.availableAt)}
                    type={lesson.lessonType}
                    />)

                 })
               }
                
            </div>
        </aside>
    )
}