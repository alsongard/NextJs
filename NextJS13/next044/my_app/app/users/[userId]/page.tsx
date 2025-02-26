import getUserDetails from '@/lib/getUserDetails';
import getUserPost from '@/lib/getUserPost';
import UserPostComponent from './component/userComponent';
import { Suspense } from 'react';
type Params = {
    params: {
        userId: string
    }
}
export const metadata = {
    title: "user details",
    description: "user details page"
}

export default async function UserDetails({params} : Params) {

    console.log(`this is the userId passed as the routeParameter: ${params.userId}`);


    const data : Promise<User> = getUserDetails(params.userId);
    const postData : Promise<Post[]> = getUserPost(params.userId);
    const userDetails = await data;
    // console.log("this is userdetails : ");
    // console.log(userDetails);
    const userDetailsContent = [userDetails].map((dataItem)=>{
        // const {street, suite, city, zipcode} = dataItem.address;
        return (
            <div key={dataItem.id}>
                <p>Name: {dataItem.name}</p>
                <p>Email: {dataItem.email}</p>
                <p>Phone: {dataItem.phone}</p>
                <p>Website: {dataItem.website}</p>
            </div>
        )
    });

    return (
        <div>
            <h2>UserDetails </h2>
            {userDetailsContent}
            <br/>
            <div>
                <Suspense>
                    <UserPostComponent promise={postData}/>
                </Suspense>
            </div>
        </div>
    )
}
