import { $query, $update, Record, StableBTreeMap, Vec, match, Result, nat64, ic, Opt } from 'azle';
import { v4 as uuidv4 } from 'uuid';



type Post = Record<{
    post_id:string;
    story_id:string;
    title:string;
    story:string;
    imageUrl:string;
    createdAt: nat64;
    updatedAt: Opt<nat64>;
}>

type Story = Record<{
    story_id:string;
    main:string;
    title:string;
    mainImage:string;
    story:Vec<string>;
    user:string;
    createdAt: nat64;
    updatedAt: Opt<nat64>;

}>

type User = Record<{
user_id:string;
name:string;
post:string;
profile:string;
}>

const storyStorage  = new StableBTreeMap<string, Story>(1,44,102400000)

const postStorage = new StableBTreeMap<string, Post>(2,44,102400000)


const userStorage = new StableBTreeMap<string,User>(3,44,1024)


$update;
export function createStory(payload:Story):Result<Story, string>{
    const story: Story = {story_id: uuidv4(),createdAt: ic.time(), updatedAt: Opt.None, main:payload.main, story:payload.story, user:payload.user, mainImage:payload.mainImage, title:payload.title};

    storyStorage.insert(story.story_id, story);
    return Result.Ok(story)

}



$update;
export function addPost(payload:Post):Result<Post, string>{
    const {story_id, title, story, imageUrl} = payload
    const post: Post = {
        post_id: uuidv4(), createdAt: ic.time(), updatedAt:Opt.None,story_id,title, story, imageUrl
    }
    postStorage.insert(post.post_id , post);
    return Result.Ok(post)
}


$query;
export function getPosts(story_id:string):Result<Vec<Post>, string>{
    const posts = postStorage.values().filter(post=>post.story_id === story_id)
    return Result.Ok(posts)
}


$query;
export function getSinglePost(post_id:string):Result<Post, string>{
 return match(postStorage.get(post_id),{
    Some: (post)=>Result.Ok<Post,string>(post),None:()=>Result.Err<Post,string>(`a post with id=${post_id} not found`)
 })
}


$query;
export function getStories():Result<Vec<Story>, string>{
    return Result.Ok(storyStorage.values())
}      

$query;
export function getSingleStory(story_id:string):Result<Story, string>{
    return match(storyStorage.get(story_id),{
       Some: (story)=>Result.Ok<Story,string>(story),None:()=>Result.Err<Story,string>(`a story with id=${story_id} not found`)
    })
   }


   $query;
export function getUsers():Result<Vec<User>, string>{
    return Result.Ok(userStorage.values())
}
   
$update;
export function addUser(payload:User):Result<User, string>{
    const user: User = {user_id: uuidv4(), name:payload.name, post:payload.post, profile:payload.profile};

    userStorage.insert(user.user_id, user);
    return Result.Ok(user)

}

$query;
export function getSingleUser(user_id:string):Result<User, string>{
    return match(userStorage.get(user_id),{
       Some: (user)=>Result.Ok<User,string>(user),None:()=>Result.Err<User,string>(`a user with id=${user_id} not found`)
    })
   }





// a workaround to make uuid package work with Azle
globalThis.crypto = {
     // @ts-ignore
    getRandomValues: () => {
        let array = new Uint8Array(32);

        for (let i = 0; i < array.length; i++) {
            array[i] = Math.floor(Math.random() * 256);
        }

        return array;
    }
};