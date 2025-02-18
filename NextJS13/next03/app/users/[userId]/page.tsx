import getUserEach from '@/lib/getUserEach';
import getUserPost from '@/lib/getUserPost';
import { Suspense } from 'react';
import UserPostComponent from './components/userPostComponent';
type Params = {
    params:{
        userId: string;
    }
};

// generate metadata for each userpage done dynamically
// create a funciton
export async function generateMetadata({params}: Params)
{
    const userData = getUserEach(params.userId);
    const user = await userData;
   return {
        title: user.name,
        description: `This are the post for the user : ${user.name}`
    }
}

export default async function UserEachPage({params} : Params) {
    // requesting data in parallel
    // console.log(`the value of params is : ${params}`);
    // console.log(params);
    // const userEachData : Promise<User> =  getUserEach(params.userId);
    // const userPostData: Promise<Post[]> = getTypeCodePost(userId);
    // const data : Promise<User[]> = getUserEach(params.userId);
    // const userData = await data;
    // console.log("What happens when userData");
    // console.log(userData);
    // const {name, id, email, username, website} = userData;
    // const {street, suite, city} = userData.address;
    // const [user, userPost] = await Promise.all([userEachData, userPostData]);

    // assigning data to var
    const userData : Promise<User> = getUserEach(params.userId); 
    // since we are only getting a single user we use the type description User and not an array
    const userPostData : Promise<Post[]> = getUserPost(params.userId);

    // const [user, userPosts] = await Promise.all([userData, userPostData]);
    const user = await userData;

  return (
    <div>
        <h1>User Details for {user.name}</h1>
        <Suspense fallback={<h2>Loading...</h2>}>
            <UserPostComponent promise={userPostData}/>
        </Suspense>

    </div>
  )
}
