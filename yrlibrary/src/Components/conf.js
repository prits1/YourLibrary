// import { Client, ID, Databases, Storage, Query} from "appwrite";

// export class Service {
//     client = new Client();
//     databases;
//     bucket;

//     constructor() {
//         this.client
//             .setEndpoint(import.meta.env.VITE_ENDPOINT)
//             .setProject(import.meta.env.VITE_PROJECT_ID);
//         this.databases = new Databases(this.client);
//         this.bucket = new Storage(this.client);
//     }

//     async createPost({ bookname, slug, author, firstname, lastname, publisher, ISBN, language, pages, category, borrow_price, buy_price, Additional_details, book_summary, publish_date, coverimage, status, userId }) {
//         try {
//             return await this.databases.createDocument(
//                 import.meta.env.VITE_DATABASE_ID,
//                 import.meta.env.VITE_COLLECTION_ID,
//                 slug,
//                 {
//                     bookname,
//                     author,
//                     firstname,
//                     lastname,
//                     publisher,
//                     ISBN,
//                     language,
//                     pages,
//                     category,
//                     borrow_price,
//                     buy_price,
//                     Additional_details,
//                     book_summary,
//                     publish_date,
//                     coverimage,
//                     status,
//                     userId
//                 }
//             );
//         } catch (error) {
//             console.log("Appwrite service :: createPost :: error", error);
//             throw error; // Consider rethrowing the error for higher-level handling
//         }
//     }

//     async updatePost(slug, { bookname, author, firstname, lastname, publisher, ISBN, language, pages, category, borrow_price, buy_price, Additional_details, book_summary, publish_date, coverimage, status}) {
//         try {
//             return await this.databases.updateDocument(
//                 import.meta.env.VITE_DATABASE_ID,
//                 import.meta.env.VITE_COLLECTION_ID,
//                 slug,
//                 {
//                     bookname,
//                     author,
//                     firstname,
//                     lastname,
//                     publisher,
//                     ISBN,
//                     language,
//                     pages,
//                     category,
//                     borrow_price,
//                     buy_price,
//                     Additional_details,
//                     book_summary,
//                     publish_date,
//                     coverimage,
//                     status
//                 }
//             );
//         } catch (error) {
//             console.log("Appwrite service :: updatePost :: error", error);
//             throw error;
//         }
//     }

//     async deletePost(slug) {
//         try {
//             await this.databases.deleteDocument(
//                 import.meta.env.VITE_DATABASE_ID,
//                 import.meta.env.VITE_COLLECTION_ID,
//                 slug
//             );
//             return true;
//         } catch (error) {
//             console.log("Appwrite service :: deletePost :: error", error);
//             return false;
//         }
//     }

//     async getPost(slug) {
//         try {
//             return await this.databases.getDocument(
//                 import.meta.env.VITE_DATABASE_ID,
//                 import.meta.env.VITE_COLLECTION_ID,
//                 slug
//             );
//         } catch (error) {
//             console.log("Appwrite service :: getPost :: error", error);
//             return false;
//         }
//     }

//     async getPosts(queries = [Query.equal("status", "active")]){
//         try {
//             return await this.databases.listDocuments(
//                 import.meta.env.VITE_DATABASE_ID,
//                 import.meta.env.VITE_COLLECTION_ID,
//                 queries,
//             );
//         } catch (error) {
//             console.log("Appwrite service :: getPosts :: error", error);
//             return false;
//         }
//     }

//     // File upload service
//     async uploadFile(file) {
//         try {
//             return await this.bucket.createFile(
//                 import.meta.env.VITE_BUCKET_ID,
//                 ID.unique(),
//                 file
//             );
//         } catch (error) {
//             console.log("Appwrite service :: uploadFile :: error", error);
//             return false;
//         }
//     }

//     async deleteFile(fileId) {
//         try {
//             await this.bucket.deleteFile(
//                 import.meta.env.VITE_BUCKET_ID,
//                 fileId
//             );
//             return true;
//         } catch (error) {
//             console.log("Appwrite service :: deleteFile :: error", error);
//             return false;
//         }
//     }

//     getFilePreview(fileId) {
//         return this.bucket.getFilePreview(
//             import.meta.env.VITE_BUCKET_ID,
//             fileId
//         );
//     }
// }

// const service = new Service();
// export default service;

import { Client, Databases, Storage, Query, ID} from "appwrite";

export class Service {
       client = new Client();
       databases;
       bucket;

       constructor(){
        this.client.setEndpoint(import.meta.env.VITE_ENDPOINT)
                    .setProject(import.meta.env.VITE_PROJECT_ID);
                this.databases = new Databases(this.client);
                this.bucket = new Storage(this.client);
       }
       async getPost(slug){
           try {
            return await this.databases.getDocument(
                                import.meta.env.VITE_DATABASE_ID,
                                import.meta.env.VITE_COLLECTION_ID,
                                slug
                            );
           } catch (error) {
               console.log("Appwrite service :: get Post()", error);
               return false
           }
       }

       async getPosts(queries = [Query.equal("status", "active")]){
                try {
                    return await this.databases.listDocuments(
                        import.meta.env.VITE_DATABASE_ID,
                        import.meta.env.VITE_COLLECTION_ID,
                        queries,
                    );
                } catch (error) {
                    console.log("Appwrite service :: getPosts :: error", error);
                    return false;
                }
            }

            async createPost({ Book_Name, slug,coverimage, status, userId }) {
                        try {
                            return await this.databases.createDocument(
                                import.meta.env.VITE_DATABASE_ID,
                                import.meta.env.VITE_COLLECTION_ID,
                                slug,
                                {
                                    Book_Name,
                                    coverimage,
                                    status,
                                    userId
                                  
                                }
                            );
                        } catch (error) {
                            console.log("Appwrite service :: createPost :: error", error);
                            throw error; // Consider rethrowing the error for higher-level handling
                        }
                    }
                    async updatePost(slug, {  Book_Name, coverimage, status, userId}) {
                                try {
                                    return await this.databases.updateDocument(
                                        import.meta.env.VITE_DATABASE_ID,
                                        import.meta.env.VITE_COLLECTION_ID,
                                        slug,
                                        {
                                            Book_Name,
                                            coverimage,
                                            status,
                                            userId
                                        }
                                    );
                                } catch (error) {
                                    console.log("Appwrite service :: updatePost :: error", error);
                                    throw error;
                                }
                            }

                            async deletePost(slug) {
                                        try {
                                            await this.databases.deleteDocument(
                                                import.meta.env.VITE_DATABASE_ID,
                                                import.meta.env.VITE_COLLECTION_ID,
                                                slug,
                                            );
                                            return true;
                                        } catch (error) {
                                            console.log("Appwrite service :: deletePost() :: error", error);
                                            return false;
                                        }
                                    }

                                    // storage service
                                    async uploadFile(file) {
                                                try {
                                                    return await this.bucket.createFile(
                                                        import.meta.env.VITE_BUCKET_ID,
                                                        ID.unique(),
                                                        file
                                                    );
                                                } catch (error) {
                                                    console.log("Appwrite service :: uploadFile :: error", error);
                                                    return false;
                                                }
                                            }

                                            async deleteFile(fileId) {
                                                        try {
                                                            await this.bucket.deleteFile(
                                                                import.meta.env.VITE_BUCKET_ID,
                                                                fileId
                                                            );
                                                            return true;
                                                        } catch (error) {
                                                            console.log("Appwrite service :: deleteFile :: error", error);
                                                            return false;
                                                        }
                                                    }
                                                    getFilePreview(fileId) {
                                                                return this.bucket.getFilePreview(
                                                                    import.meta.env.VITE_BUCKET_ID,
                                                                    fileId
                                                                ).href
                                                            }
}

const service = new Service();
export default service;


