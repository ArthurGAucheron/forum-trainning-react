import {PostInterface} from "./post-interface";
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Chip,
    Grid,
    IconButton
} from "@mui/material";
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';

interface IPostComponentProps{
    vote : () => void;
    unVote : () => void;
    deletePost : () => void;
    post: PostInterface
}

function PostComponent(props : IPostComponentProps){

    const {post,unVote,deletePost,vote} = props;

    return (
            <Card>
                <CardHeader
                    avatar={   <Avatar alt="avatar" src={post.authorAvatar}/>}
                    title = {post.authorName}
                    subheader={new Date(post.creationDate).toLocaleString("fr-FR")}
                    action={
                        <IconButton onClick={deletePost} edge="end" aria-label="delete">
                            <CloseIcon />
                        </IconButton>
                    }
                />
                <CardMedia
                    sx={{ height: 140 }}
                    image={post.image}
                    title="image principale"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {post.content}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Grid container justifyContent="space-between">
                        <Grid item>
                            <Button onClick={vote} size="small">Vote</Button>
                            <Button onClick={unVote} size="small">Unvote</Button>
                        </Grid>
                        <Grid item>
                            <Chip label={post.voteCount} color="success" />
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
    )
}

export default PostComponent;
