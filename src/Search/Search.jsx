import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import BlogPost from '../BlogPost/BlogPost';
import React, { useState, useEffect } from 'react';
import blogs from '../blog';
function Search()
{
    let [BlogResult,setBlogResult]=useState([])
    let [SearchResult , setSearchResult]=useState(null)
    const [timer, setTimer] = useState(null);
    useEffect(()=>{
        setBlogResult(blogs)
        console.log(blogs);
    },[])

    const handleChange = (event) =>{
        let query=event.target.value;
        if(timer){
            clearTimeout(timer);
            setTimer(null);
        }
        setTimer(
            setTimeout(()=>{
                if(query){
                    let data = BlogResult.filter((blog)=>{
                        if(blog.title.includes(query) || blog.content.includes(query)){
                            return blog
                        }
                    })
                    console.log(data)
                    setSearchResult(data)
                }else{
                    setSearchResult(null)
                }
            },2000)
        )
    }


    return (
        <div className='container'>
            <Nav fill variant="tabs" defaultActiveKey="/home" className='w-50  m-auto mt-5'>
                <Nav.Item >
                        <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2 p-3"
                        aria-label="Search"
                        onChange={ handleChange }
                        />
                        <Button variant="outline-dark" className='w-25 me-2 p-3'>Search</Button>
                    </Form>
                </Nav.Item>
            </Nav>
            {/* Content of blog posts */}
            <br></br>
            {
                SearchResult ? SearchResult.map((blog)=>{
                    return <BlogPost blog={blog} key={blog.id}></BlogPost>
                }): BlogResult.map((blog)=>{
                    return <BlogPost blog={blog}  key={blog.id} ></BlogPost>
                })
            }
            
        </div>
        
    );
}
export default Search;