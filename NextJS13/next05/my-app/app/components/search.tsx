'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function Search() {
    const [searchTerm, setSearchTerm] = useState("");

    const router = useRouter();
    function handleChange(event: React.ChangeEvent<HTMLInputElement>)
    {
        const {value} = event.target;
        setSearchTerm(()=>{
            return  value;
        })

    };
    async function handleSubmit( e: FormEvent<HTMLFormElement>)
    {
        console.log(searchTerm);
        e.preventDefault();
        router.push(`/${searchTerm}/`); // pushes the formData to the url
        setSearchTerm('');
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit} className="w-50 flex justify-center md:justify-between">
                <input
                    type='text'
                    value={searchTerm}
                    onChange={handleChange}
                    className="bg-white p-2 w-80 text-xl rounded-xl"
                />

                <input className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold" value="🚀" type="submit"/>
            </form>
        </div>
    )
}
