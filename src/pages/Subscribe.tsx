import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Logo } from "../components/Logo";
import { SideBar } from "../components/SideBar";
import { Video } from "../components/Video";
import { useCreateSubcriberMutation } from "../graphql/generated";

import imgUrl from '../../src/assests/cold_background.png'

// const CREATE_SUBSCRIBER_MUTATION = gql`
//     mutation CreateSubcriber ($name: String!, $email: String!) {
//     createSubscriber(data: {name: $name, email:$email}) {
//        id
//     }
// }

// `

export function Subscribe(){

    const navigate = useNavigate()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    //const [createSubscriber, {loading}] = useMutation(CREATE_SUBSCRIBER_MUTATION)

    const [createSubscriber, {loading}] = useCreateSubcriberMutation()

    async function handleSubcribe(event: FormEvent){
        event.preventDefault();

        console.log(name, email);

        await createSubscriber({
            variables:{
                name,
                email,
            }
        })

        navigate('/event');

    }
    

    return(
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">

            <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-[640px]">
                    <Logo/>

                    <h1 className="mt-8 text-[2.5rem] leading-tight">Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com  <strong className="text-blue-500">React JS</strong></h1>

                    <p className="mt-4 text-gray-200 leading-relaxed">Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.</p>
                </div>
                
                <div className="p-8 bg-gray-700  border border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

                    <form onSubmit={handleSubcribe} className="flex flex-col gap-2 w-full">
                        <input 
                            className="bg-gray-900 rounded px-5 h-14"
                            type="text" 
                            placeholder="Seu nome completo"
                            onChange={event => setName(event.target.value)}/>
                        <input  
                            className="bg-gray-900 rounded px-5 h-14"
                            type="email" 
                            placeholder="Digite Seu Email"
                            onChange={event => setEmail(event.target.value)}/>

                        <button 
                            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50 "
                            disabled={loading}
                            type="submit">
                            Garantir a minha vaga
                        </button>
                        
                    </form>

                </div>
            </div>

            <img src={imgUrl} className="mt-10" alt=""></img>
        </div>
    )
}
