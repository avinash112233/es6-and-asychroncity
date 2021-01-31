
let posts =[{ title: 'Post one' , body:'This is post one' }];
function createPost(post)
{
    posts.push(post);
}
function getPost(posts)
{
    posts.forEach(function(elements){
        console.log(elements);
    })
}
setTimeout(createPost,2000,{ title: 'Post two' , body:'This is post two' });
setTimeout(getPost,3000,posts);
module.exports = 
{
      posts: posts,
      createPost: createPost,
      getPost: getPost
};
