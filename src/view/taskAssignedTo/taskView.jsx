import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { api_end_point } from "../../api/api";

import "./task.css";

import ViewListIcon from '../../assets/viewListIcon.svg'
import { useNavigate } from "react-router-dom";






const BlogView = ({ show, setShow, modalData }) => {
    const [file, setFile] = useState();

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [excerpt, setExcert] = useState('');
    const [urlSlug, setSlug] = useState('');
    const [metaDesc, setMetaDesc] = useState('');
    const [metaKeyWord, setMetaKeyword] = useState('');
    const [seoTitle, setSeoTitle] = useState('');
    const [isActive, setActive] = useState('');
    const [imgUrl, setImgUrl] = useState('')
    const [statusList, setStatusList] = useState([{ value: true, name: 'Active' }, { value: false, name: 'Inactive' }])
    const navigate = useNavigate();


    useEffect(() => {

        setTitle(modalData.title)
        setDesc(modalData.content)
        setExcert(modalData?.excerpt)
        setSlug(modalData.url_slug)
        setMetaDesc(modalData.meta_desc)
        setMetaKeyword(modalData.meta_keywords)
        setSeoTitle(modalData.seo_title)
        setImgUrl(modalData.img_url)
        setActive(modalData.isActive);

    }, [modalData])

   




    const onFileChange = (event) => {

        setFile(event.target.files[0])



    }

    const handleBlog = (id) => {

        const formData = new FormData();

        console.log(file, "CHECK FILE")

        console.log(isActive,"CHECK IS ACTIVE")

        // // Update the formData object
        if (file) {
            formData.append(
                "files",
                file,
                file.name
            );
        }


        formData.append('_id', modalData._id);
        formData.append('title', title);
        formData.append('desc', desc);
        formData.append('excert', excerpt);
        formData.append('url_slug', urlSlug);
        formData.append('meta_desc', metaDesc);
        formData.append('meta_keywords', metaKeyWord);
        formData.append('seo_title', seoTitle);
        formData.append('isActive', isActive);
        formData.append('img_url', imgUrl)

        axios.post(`${api_end_point}/blogs/update`, formData ,{
            headers: {
                'ngrok-skip-browser-warning': 'skip-browser-warning',
                'Authorization': sessionStorage.getItem("access-token")
            }
        }).then(res => {
            if (res.status === 200) {
                setShow(false)
                alert(res.data.message)
                
            }
        }).catch(err => console.log(err))

    }


    return (


        <Modal
            show={show}
            onHide={() => setShow(false)}
            fullscreen={true}
            aria-labelledby="example-custom-modal-styling-title"
            style={{ zIndex: '4444444' }}
        >

            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title" className="heading-content">
                    Users Detail View
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row justify-content-center">

                    <div className="">
                        <div className="">
                            <div className="card-body">
                                <div style={{ display: "flex", marginBottom: 'auto', }}>
                                    <div className="add-blogs-section">
                                        <div className="blog-header">
                                            Edit Blog
                                        </div>
                                        <div className="user-input-container">
                                            <div className="col mt-2">
                                                <div className="col mb-3 text-start">
                                                    <label for="formGroupExampleInput" className="label">Blog Title</label>

                                                    <input type="text" className="form-control" placeholder="Blog Title" value={title} onChange={e => setTitle(e.target.value)} />
                                                </div>
                                                <div className="col mb-3 text-start">
                                                    <label for="formGroupExampleInput" className="label">Blog Content</label>

                                                    <textarea type="text" className="form-control text-area-container" placeholder="Blog Content" value={desc} onChange={e => setDesc(e.target.value)} />
                                                </div>
                                                <div className="col mb-3 text-start">
                                                    <label for="formGroupExampleInput" className="label">Excerpt</label>

                                                    <textarea type="text" className="form-control" placeholder="Type here the visible subtitle" style={{ height: '100px' }} value={excerpt} onChange={e => setExcert(e.target.value)} />
                                                </div>
                                            </div>

                                            <button type="button" className="add-btn" onClick={handleBlog}>Update</button>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'space-between', marginTop: '36px' }}>
                                        <div className="blog-detail-container">
                                            <div className="blog-header">
                                                Blog Details
                                            </div>
                                            <div className="blogs-detail-input">
                                                <div className="col mt-2">
                                                    <div className="col mb-3 text-start">
                                                        <label for="formGroupExampleInput" className="label">Url Slugs</label>

                                                        <input type="text" className="form-control input-size" placeholder="Url Slugs" value={urlSlug} onChange={e => setSlug(e.target.value)} />
                                                    </div>
                                                    <div className="col mb-3 text-start">
                                                        <label for="formGroupExampleInput" className="label">Blog Status</label>

                                                        {/* <input type="text" className="form-control input-size" placeholder="Blog Status" /> */}

                                                        <select className="form-control form-select input-size" aria-label="Default select example" onChange={(e) => setActive(e.target.value)}>
                                                            <option selected>{isActive ? "Active" : "Inactive"}</option>
                                                            {statusList.map((data) => {
                                                                return (<option value={data.value}>{data.name}</option>)
                                                            })}

                                                        </select>
                                                    </div>
                                                    <div className="col mb-3 text-start">
                                                        <label for="formGroupExampleInput" className="label">Post Image</label>
                                                        <input type="file" className="form-control input-size" onChange={onFileChange} />
                                                        <img style={{ width: "300px", borderRadius: '5px', marginTop: '10px' }} src={imgUrl} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-detail-container">
                                            <div className="blog-header">
                                                SEO Details
                                            </div>
                                            <div className="blogs-detail-input">
                                                <div className="col mt-2">
                                                    <div className="col mb-3 text-start">
                                                        <label for="formGroupExampleInput" className="label">Meta Description</label>

                                                        <input type="text" className="form-control input-size" placeholder="Meta Description" value={metaDesc} onChange={e => setMetaDesc(e.target.value)} />
                                                    </div>
                                                    <div className="col mb-3 text-start">
                                                        <label for="formGroupExampleInput" className="label">Meta Keywords</label>

                                                        <input type="text" className="form-control input-size" placeholder="Meta Keywords" value={metaKeyWord} onChange={e => setMetaKeyword(e.target.value)} />
                                                    </div>
                                                    <div className="col mb-3 text-start">
                                                        <label for="formGroupExampleInput" className="label">SEO Title</label>
                                                        <input type="text" className="form-control input-size" placeholder="SEO Title" value={seoTitle} onChange={e => setSeoTitle(e.target.value)} />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



            </Modal.Body>
        </Modal>

    )

}

export default BlogView;