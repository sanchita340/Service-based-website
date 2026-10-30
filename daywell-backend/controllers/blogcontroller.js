import Blog from "../models/blogmodel.js";
export const createBlog= async(req,res)=>{
    try{
        const newblog= new Blog(req.body)
        const saveblog= await newblog.save()

        res.status(200).json({message:" new blog created",
            blog: saveblog
        })

    
    } catch (error){
         res.status(500).json({
            message:" error in creating blog",
            error: error.message
        }

        )
    }

    
} 