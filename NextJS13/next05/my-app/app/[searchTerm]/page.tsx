import WikiSearch from "@/lib/getWikiResult";
import { title } from "process";
import React from "react";
type Props = {
    params : {
        searchTerm: string
    }
}


// generate Metadata 
export  async function generateMetadata({params: {searchTerm}}:Props)
{
    const wikiData: Promise<SearchResult>  = WikiSearch(searchTerm);
    const data = await wikiData;
    // fetch data(nextjs will deduplicate (not fetch again))

    const search = searchTerm.replaceAll("%20", " ")
    if (!data?.query?.pages)
    {
        return {
            title: `No  results for ${search}`,
            description: `No results found for ${searchTerm}`
        }
    }

    
    return {
        title: `${searchTerm}`,
        description: `The results for ${searchTerm} are shown below.`
    }
}



export default async function SearchTerm({params : {searchTerm}} : Props)
{
    const wikiData: Promise<SearchResult>  = WikiSearch(searchTerm);
    console.log(`the searchTerm is : ${searchTerm}`);
    const data = await wikiData;
    const results:Result[] | undefined = data?.query?.pages;

    const search = searchTerm.replaceAll("%20", " ")


    console.log("this are the results: ");
    // console.log(result);

    // variable for conditional rendering // using tenary statement
    let beViewed = true;
    if (results == undefined)
    {
        console.log("undefined data");
        beViewed = false;

    }
    const content = (
           <div>
                {results 
                    ?
                        Object.values(results).map((result) => {
                            return <p>{JSON.stringify(result)}</p>
                        })
                    :
                        <h2>The term {search} cannot be found</h2>
                }
           </div>
    )
    // const retreived_data = results ? results : undefined
    // console.log(retreived_data);
    return content

}