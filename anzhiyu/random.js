var posts=["2021/04/15/hello-world/","2021/04/15/image/","2021/04/15/hello-world copy/","2025/04/15/text1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };