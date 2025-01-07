import React, { useState, useCallback } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { User } from 'lucide-react';
import { useAuth } from '../utils/AuthContext';
import appwriteService from '../conf.js';
// import { useSelector } from 'react-redux';

function Publish({ post }) {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    // const [coverImage, setCoverImage] = useState(null);
    const { register, handleSubmit, watch, setValue } = useForm({
        defaultValues: {
            bookname: post?.bookname || "",
            // author: post?.author || "",
            // firstname: post?.firstname || "",
            // lastname: post?.lastname || "",
            // publisher: post?.publisher || "",
            // ISBN: post?.ISBN || "",
            // language: post?.language || "",
            // pages: post?.pages || "",
            // category: post?.category || "",
            // borrow_price: post?.borrow_price || "",
            // buy_price: post?.buy_price || "",
            // Additional_details: post?.Additional_details || "",
            // book_summary: post?.book_summary || "",
            // publish_date: post?.publish_date || "",
        },
    });

    const handleLogout = async () => {
        await logout();
    };

    // const userData = useSelector(state => state.user.userData)

    // const handleCoverImageChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         setCoverImage(URL.createObjectURL(file));
    //         setValue("coverimage", file);
    //     }
    // };

    const onSubmit = async (data) => {
        try {
            let file = null;
            console.log("file 1",file);
            console.log("data",data);
            console.log("data coverimage",data.coverimage);
            console.log("data length",data.coverimage.length);
            if (data.coverimage && data.coverimage.length > 0) {
                file = data.coverimage[0]; // Accessing the first file
                file = await appwriteService.uploadFile(file); // Uploading the file to Appwrite
            }
    
            if (post) {
                if (file) {
                    console.log("file 2",file);
                    await appwriteService.deleteFile(post.coverimage); // Deleting the old cover image
                }
    
                const dbPost = await appwriteService.updatePost(post.$id, {
                    ...data,
                    coverimage: file ? file.$id : post.coverimage, // Using the new cover image ID if available
                });
    
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            } else {
                if (file) {
                    console.log("file 3",file);
                    data.coverimage = file.$id; // Assigning the new file ID to the coverimage field
                    const dbPost = await appwriteService.createPost({ ...data, userId: user.$id });
    
                    if (dbPost) {
                        navigate(`/post/${dbPost.$id}`);
                    }
                } else {
                    console.log("file 4",file);
                    console.error("No file was selected for upload.");
                }
            }
        } catch (error) {
            console.log("file 5",file);
            console.error("Error uploading file:", error);
        }
    };
    

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "bookname") {
                setValue("slug", slugTransform(value.bookname), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <div>
            <div className='flex justify-between p-4'>
                <a href='/' className='text-black font-sans pl-6'>Your<span className='text-primary font-semibold'>LIBRARY</span></a>
                <div className='flex px-4'>
                    <ul className='text-primary underline px-4 py-1 '>
                        <NavLink to="/publish"><u>Publish</u></NavLink>
                    </ul>
                    <button onClick={handleLogout} className='bg-secondary rounded-full py-1 px-3 hover:bg-primary'>
                        LOGOUT
                    </button>
                    <User className='m-1 py-1' />
                </div>
            </div>

            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-5 rounded w-full max-w-2xl" style={{ paddingInline: 200 }}>
                    <h2 className="text-2xl mb-6 ">Fill out all the details to publish your book..</h2>

                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="bookname">Book Name</label>
                        <input type="text" id="bookname" {...register("bookname")} className="w-full p-2 border rounded" style={{ backgroundColor: '#F7F5F5' }} />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="author">Author</label>
                        <input type="text" id="author" {...register("author")} className="w-full p-2 border rounded" style={{ backgroundColor: '#F7F5F5' }} />
                    </div>

                    <div className="mb-4 flex space-x-4">
                        <div>
                            <label className="block mb-2" htmlFor="firstname">Owner First Name</label>
                            <input type="text" id="firstname" {...register("firstname")} className="w-full p-2 border rounded" style={{ backgroundColor: '#F7F5F5' }} />
                        </div>
                        <div>
                            <label className="block mb-2" htmlFor="lastname">Owner Last Name</label>
                            <input type="text" id="lastname" {...register("lastname")} className="w-full p-2 border rounded" style={{ backgroundColor: '#F7F5F5' }} />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="publisher">Publisher</label>
                        <input type="text" id="publisher" {...register("publisher")} className="w-full p-2 border rounded" style={{ backgroundColor: '#F7F5F5' }} />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="publish_date">Published Date</label>
                        <input type="date" id="publish_date" {...register("publish_date")} className="w-full p-2 border rounded" style={{ backgroundColor: '#F7F5F5' }} />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="ISBN">ISBN</label>
                        <input type="text" id="ISBN" {...register("ISBN")} className="w-full p-2 border rounded" style={{ backgroundColor: '#F7F5F5' }} />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="language">Language</label>
                        <input type="text" id="language" {...register("language")} className="w-full p-2 border rounded" style={{ backgroundColor: '#F7F5F5' }} />
                    </div>

                    <div className="mb-4 flex space-x-4">
                        <div>
                            <label className="block mb-2" htmlFor="pages">Pages</label>
                            <input type="number" id="pages" {...register("pages")} className="w-full p-2 border rounded" style={{ backgroundColor: '#F7F5F5' }} />
                        </div>
                        <div>
                            <label className="block mb-2" htmlFor="category">Category</label>
                            <input type="text" id="category" {...register("category")} className="w-full p-2 border rounded" style={{ backgroundColor: '#F7F5F5' }} />
                        </div>
                    </div>

                    <div className="mb-4 flex space-x-4">
                        <div>
                            <label className="block mb-2" htmlFor="borrow_price">Borrow (Rs.)</label>
                            <input type="number" id="borrow_price" {...register("borrow_price")} className="w-full p-2 border rounded" style={{ backgroundColor: '#F7F5F5' }} />
                        </div>
                        <div>
                            <label className="block mb-2" htmlFor="buy_price">Buy (Rs.)</label>
                            <input type="number" id="buy_price" {...register("buy_price")} className="w-full p-2 border rounded" style={{ backgroundColor: '#F7F5F5' }} />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="Additional_details">Additional Details</label>
                        <textarea id="Additional_details" {...register("Additional_details")} className="w-full p-2 border rounded" style={{ backgroundColor: '#F7F5F5' }}></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="book_summary">Summary</label>
                        <textarea id="book_summary" {...register("book_summary")} className="w-full p-2 border rounded" style={{ backgroundColor: '#F7F5F5' }}></textarea>
                    </div>

                    <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.coverimage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                </div>

                    {/* <div className="mb-4">
                        <label className="block mb-2" htmlFor="coverimage">Cover Image</label>
                        <input type="file" id="coverimage" accept="image/*" onChange={handleCoverImageChange} className="w-full p-2 border rounded" style={{ backgroundColor: '#F7F5F5' }} />
                        {coverImage && <img src={coverImage} alt="Cover Preview" className="mt-2 max-w-xs" />}
                    </div> */}

                    <div className="flex justify-between">
                        <button type="submit" className="bg-primary text-white py-2 px-4 rounded hover:bg-secondary">
                            {post ? "Update Book" : "Publish Book"}
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
}


export default Publish;
