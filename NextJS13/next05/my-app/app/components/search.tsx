'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';




export default function Search() {
    const [formData, setFormData] = useState("");

    const router = useRouter();
    function handleChange(event: React.ChangeEvent<HTMLInputElement>)
    {
        const {value} = event.target;
        setFormData(()=>{
            return  value;
        })

    };
    async function handleSubmit( e: FormEvent<HTMLFormElement>)
    {
        e.preventDefault();
        setFormData('');
        router.push(`/${formData}/`); // pushes the formData to the url
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit} className="w-50 flex justify-center md:justify-between">
                <input
                    type='text'
                    value={formData}
                    onChange={handleChange}
                    className="bg-white p-2 w-80 text-xl rounded-xl"
                />

                <input className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold" value="🚀" type="submit"/>
            </form>
        </div>
    )
}
