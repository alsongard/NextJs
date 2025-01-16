
// we declare this Post array with the data and it's data type we will use
export default async function Page() {
    const {events_categories} = await import("../data.json");
    // console.log(data.events_categories);
    // console.log(typeof(data.events_categories))
    const eventCategories = events_categories;

    const myElements = eventCategories.map((dataItems)=>{
        return (    
            <a id={dataItems.id} href={`/event/${dataItems.id}`}>
                <img width={200} height={'100%'} src={dataItems.image}/>
                <h2>{dataItems.title}</h2>
                <p>{dataItems.description}</p>
            </a>

        )
    })
    return (
        <>
            {myElements}
        </>
    )
}

//               {eventCategories.map(data=>  <a id={data.id} href={`/event/${data.id}`}>
{/* <img  width={200} height={'100%'}  src={data.image} alt={data.title} /> <h2>{data.title}</h2> <p>{data.description}</p> </a>)} */}

// http://localhost:3000/events/Events%20in%20London
// http://localhost:3000/events/london