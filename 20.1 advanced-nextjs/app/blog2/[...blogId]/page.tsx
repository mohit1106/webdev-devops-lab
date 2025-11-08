// any req coming to localhost:3000/blog2/1/1/45/1 or /blog2/23/1  or /blog2/12  etc...
//  at localhost:3000/blog2   nothing will come

import axios from "axios";

export default async function BlogPage({params} : any){
    const postId = (await params).blogId;

    return <div>
        blog2 page {JSON.stringify(postId)}
    </div>
}
