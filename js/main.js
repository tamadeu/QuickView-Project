var url = `https://dummyjson.com/products`;
const xhr = new XMLHttpRequest();
xhr.open("GET", url, false);
xhr.send();

const products = JSON.parse(xhr.responseText);

var urlPosts = `https://dummyjson.com/posts`;
const xhrPosts = new XMLHttpRequest();
xhrPosts.open("GET", urlPosts, false);
xhrPosts.send();

const posts = JSON.parse(xhrPosts.responseText);

qv({
    "products": products.products,
    "posts": posts.posts,
    "siteName": "QuickView.js",
    "date": new Date(),
    "qttyProducts": products.products.length,
    "qttyPosts": posts.posts.length,
    "name": "Talles",
    "pathName": window.location.pathname
});