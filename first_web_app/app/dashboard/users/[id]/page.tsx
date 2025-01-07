
function UserDetails({params} : {params: {id: String}}) {
    // console.log(params);
    const {id} = params;
  return (
    <div>
        <h1>USER DETAILS {id}</h1>
    </div>
  )
}

export default UserDetails;