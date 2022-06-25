//npm i phosphor-react

import { CheckCircle, Lock} from 'phosphor-react';

import {isPast, format} from 'date-fns';

import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';

interface LessonProps{
    title:string;
    slug:string;
    availableAt:Date;

    type: 'live' | 'class';

}

//npm i date-fns

export function Lesson(props: LessonProps){
    //se a data da aula ja passou isPast
    const isLessonAvailable = isPast(props.availableAt);

    const availableAtFormatted = format(props.availableAt, "EEEE' . 'd' de 'MMMM' . 'k'h'mm", {
        locale: ptBR,
    })

    const {slug} = useParams<{ slug:string}>()

    const isActiveLesson = slug === props.slug; 

    return(
        <Link to={`/event/lesson/${props.slug}`} className='group'>
            <span className="text-gray-300">
                {availableAtFormatted}
            </span>

            <div 
                className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${isActiveLesson ? 'bg-green-500':''}`}>
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (
                    <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                      <CheckCircle size={20}></CheckCircle>
                      Conteudo Liberado                       
                    </span>
                    ) :
                    (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                          <Lock size={20}></Lock>
                          Em Breve                     
                        </span>
                    )}

                    <span className="text-xm rounded px-2 py-[2px] text-white border border-green-300 font-bold ">
                        {props.type === 'live' ? 'AO VIVO': 'AULA PRATICA'}
                    </span>

                </header>
                <strong className="text-gray-200 mt-5 font-bold">
                    {props.title}
                </strong>
            </div>
        </Link>
        
    )
}