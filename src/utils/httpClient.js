const URL ="https://api.themoviedb.org/3";

export function get (path){
    return fetch(URL + path,{
        headers:{
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWMyNTVlMTFkMTdkZjk1OGVlNTNmZTE5NTZiMjY3ZSIsInN1YiI6IjY0MjZlMzRmOTYwY2RlMDA3NzEyNTIyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L7a7KFeSGVXeOE3ZfCs1fZCs2Y8j1qknMg3uVwxnVSc",
            "Content-Type":"application/json;charset=utf-8",
        },
    }).then((result) => result.json());
}