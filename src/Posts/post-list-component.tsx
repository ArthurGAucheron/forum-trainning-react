import PostComponent from "./post-component";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../Store/store";
import {PostInterface} from "./post-interface";
import {remove, unVote, vote} from "../Store/post-slice";
import {Container, Grid} from "@mui/material";

function Posts(){

    const posts : PostInterface[]  = useSelector((state:RootState) =>{
        return state.post;
    })

    const dispatch = useDispatch();

    const postsDefaultSorted : PostInterface[] = posts.slice().sort(
        (a:PostInterface,b : PostInterface) =>
            b.voteCount - a.voteCount);

    function displayPosts(){
        return postsDefaultSorted.map( (post : PostInterface) =>
        <Grid item xs={12} sm={6} md={4} key = {'post' + post.id}>
            <PostComponent
            deletePost={() => dispatch(remove(post.id))}
            unVote={() => dispatch(unVote(post.id))}
            vote={()=> dispatch(vote(post.id))}
            post={post}/>
        </Grid>
        )

    }

    return (
        <Container maxWidth="md" sx={{ marginTop: 4 }}>
            <Grid container spacing={1} alignContent="center">
                {displayPosts()}
            </Grid>
        </Container>
    )
}

export default Posts;
