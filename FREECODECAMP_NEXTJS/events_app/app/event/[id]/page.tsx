function EventDetails({params} : {params: {id: String}})
{
    console.log("This is params");
    console.log(params)
    const {id} = params;
    return (

        <div>
            <h1>Event Location : {id} </h1>
        </div>
    )
};
export default EventDetails;