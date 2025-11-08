// any req coming to /blog/1 or /blog/23  or /blog/12  etc...

// app/blog/[blogId]/page.tsx

import axios from "axios";

export default async function BlogPage({params} : any){
    const postId = (await params).blogId;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const data = response.data;

    return <div>
        blog page {postId}
        <br></br>

        title - {data.title}
        <br></br>
        body - {data.body}
    </div>
}
