// any req coming to localhost:3000/blog3/1/1/45/1 or /blog2/23/1  or /blog2/12  etc...
//  at localhost:3000/blog3   also fine and handled

import axios from "axios";

export default async function BlogPage({params} : any){
    const postId = (await params).blogId;

    return <div>
        blog3 page {JSON.stringify(postId)}
    </div>
}
