let posts=[{ title: 'Post one' , body:'This is post one' }];
let createPost = post =>{
    return new Promise((resolve,reject)=>{
        let err=false;
        setTimeout(()=>{
            if (err){
                reject("Error: Something went wrong");
            }else{
                posts.push(post);
                resolve(posts);
            }
        },1000);
    });

}


let getPost = () =>{
    return new Promise((resolve,reject)=>{
        let err=false;
        setTimeout(()=>{
            if(err){
            reject("Error: Something went wrong");
            }
            else
            {
                 resolve(posts);
            }

        },500);

    });

}

module.exports = {
  posts: posts,
  getPost: getPost,
  createPost: createPost
};
