import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createProduct } from "../app/Feartures/Product/ProductSlice";
import { storage } from "../config";

function AddProduct() {
  const dispatch = useDispatch();
  const [percent, setPercent] = useState(0);
  // State to store uploaded file
  const [file, setFile] = useState("");
  const [Photourl, setPhotoUrl] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    price: "",
    photo: "",
    category: "",
  });

  const handleOnChange = (e) => {
    //const name = e.target.name
    //const value = e.target.value
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const { title, desc, price, category, brand, photo } = formData;

  const onSubmit = (e) => {
    e.preventDefault();
    if (title === "" || desc === "" || price === "") {
      return toast.error("All fields are required");
    }
    try {
      const productData = {
        title,
        price,
        description: desc,
        brand,
        photo: Photourl,
        category,
      };
      if (Photourl === "") {
        return toast.error("please upload an image first");
      } else {
        dispatch(createProduct(productData));
        // if (isSuccess && !isError) {
        //   return toast.success("product was created");
        // }

        setFormData((prevState) => ({
          ...prevState,
          title: "",
          desc: "",
          price: "",
          photo: "",
          category: "",
        }));
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Handle file upload event and update state
  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!");
    }

    const storageRef = ref(
      storage,
      `/files/${file.name}${Math.random().toFixed(6)}`
    );

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setPhotoUrl(url);
          alert("photo was uploaded");
        });
      }
    );
  };
  return (
    <div>
      <h4 className="my-2 text-center">Create Product</h4>
      <div className="mt-3 gap-2 d-flex  flex-column ">
        {percent > 0 && (
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped"
              role="progressbar"
              style={{ width: percent + "%" }}
              aria-valuenow="10"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        )}

        <div>
          <label htmlFor="photo">photo</label>
          <input
            onChange={handleChange}
            accept="/image/*"
            type="file"
            className="form-control"
          />
        </div>

        <button className="btn btn-primary" onClick={handleUpload}>
          upload photo
        </button>
      </div>

      <form className="container" onSubmit={onSubmit}>
        <div>
          <div className="mt-3">
            <label htmlFor="title">Title</label>
            <input
              name="title"
              value={title}
              onChange={handleOnChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="desc">desc</label>
            <textarea
              name="desc"
              id="desc"
              value={desc}
              onChange={handleOnChange}
              cols="30"
              rows="5"
              className="form-control"
            ></textarea>
          </div>
          <div className="mt-3">
            <label htmlFor="title">price</label>
            <input
              name="price"
              value={price}
              onChange={handleOnChange}
              type="text"
              className="form-control"
            />
          </div>
          {/* <div className="mt-3">
            <label htmlFor="category">choose category:</label>
            <br />
            <select
              name="category"
              value={category}
              onChange={handleOnChange}
              id="category"
            >
              <option value="#"></option>
              <option value="">Gin</option>
              <option value="">Gin</option>
              <option value="">Gin</option>
              <option value="">Spirit</option>
            </select>
          </div> */}
          {/* <div className="mt-3">
            <label htmlFor="brand">brand</label>
            <input
              name="brand"
              value={brand}
              onChange={handleOnChange}
              type="text"
              className="form-control"
            />
          </div> */}

          <div>
            <div className="mt-3">
              <button
                type="submit"
                className="btn btn-block btn-secondary mb-4"
              >
                Create Product
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
