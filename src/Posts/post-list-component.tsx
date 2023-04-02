import PostComponent from "./post-component";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../Store/store";
import {PostInterface} from "./post-interface";
import {remove, unVote, vote} from "../Store/post-slice";
import {Box, Grid} from "@mui/material";

function PostListComponent(){

    const posts : PostInterface[]  = useSelector((state:RootState) =>{
        return state.post;
    })

    const dispatch = useDispatch();

    const postsDefaultSorted : PostInterface[] = posts.slice().sort(
        (a:PostInterface,b : PostInterface) =>
            b.voteCount - a.voteCount);

    function displayPosts(){
        return postsDefaultSorted.map( (post : PostInterface) =>
        <Grid item xs={12} sm={6} md={4}>
            <PostComponent
            key = {'post' + post.id}
            deletePost={() => dispatch(remove(post.id))}
            unVote={() => dispatch(unVote(post.id))}
            vote={()=> dispatch(vote(post.id))}
            post={post}/>
        </Grid>
        )

    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', margin: 'auto', maxWidth: '80%' }}>
            <Grid container spacing={2} alignContent="center">
                {displayPosts()}
            </Grid>
        </Box>
    )
}

export default PostListComponent;
