import WikiSearch from "@/lib/getWikiResult";

type Props = {
    params : {
        searchTerm: string
    }
}

export default async function SearchTerm({params : {searchTerm}} : Props)
{
    const wikiData: Promise<SearchResult>  = WikiSearch(searchTerm);
    console.log(`the searchTerm is : ${searchTerm}`);
    const data = await wikiData;
    const result:Result[] | undefined = data?.query?.pages;

    console.log(result);
    return (
        <div>
            <p>Getting started</p>
        </div>
    )

}