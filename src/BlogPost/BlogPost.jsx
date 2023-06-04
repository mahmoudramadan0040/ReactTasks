import { Button, Card } from "react-bootstrap";

function BlogPost(props) {
    let {blog} = props;
    return ( 
        <Card className="m-3">
            <Card.Body>
            <Card.Title>{blog?.title}</Card.Title>
            <Card.Text>
                {blog?.content}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default BlogPost;