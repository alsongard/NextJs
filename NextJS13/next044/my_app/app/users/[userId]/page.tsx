import getUserDetails from '@/lib/getUserDetails';
import getUserPost from '@/lib/getUserPost';
import UserPostComponent from './component/userComponent';
import { Suspense } from 'react';

type Params = {
    params: {
        userId: string
    }
}

//  to generate dynamic metadata
export async function generateMetadata({params}: Params)
{
    const data: Promise<User> =  getUserDetails(params.userId);
    const userData = await data;

    return {
        title: userData.name,
        description: `User post for user ${userData.name}`
    }
}

export default async function UserDetails({params} : Params) {

    // console.log(`this is the userId passed as the routeParameter: ${params.userId}`);


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
            <br/>
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
