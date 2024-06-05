import React, { useState } from 'react'
import './Add.css'
import { assets,url } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {
    const url = "http://localhost:4000";
    const [data, setData] = useState({
        name: "",
        description: "",
        difficulty: "Khó",
        category: "Miền Bắc"
    });

    const [image, setImage] = useState(false);

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("difficulty", data.difficulty);
        formData.append("category", data.category);
        formData.append("image", image);
        const response = await axios.post(`${url}/api/food/add`, formData);
        if (response.data.success) {
            toast.success(response.data.message)
            setData({
                name: "",
                description: "",
                difficulty: "Khó",
                category: "Miền Bắc"
            })
            setImage(false);
        }
        else{
            toast.error(response.data.message)
        }
    }

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className='add-img-upload flex-col'>
                    <p>Tải hình ảnh</p>
                    <label htmlFor="image">
                        <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" />
                    </label>
                    <input onChange={(e) => { setImage(e.target.files[0]) }} type="file" id="image" hidden required />
                </div>
                <div className='add-product-name flex-col'>
                    <p>Tên món ăn</p>
                    <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Nhập tên' required />
                </div>
                <div className='add-product-description flex-col'>
                    <p>Thông tin món ăn</p>
                    <textarea name='description' onChange={onChangeHandler} value={data.description} type="text" rows={6} placeholder='Nhập thông tin món ăn' required />
                </div>
                <div className='add-category-difficulty'>
                    <div className='add-category flex-col'>
                        <p>Món ăn vùng miền:</p>
                        <select name='category' onChange={onChangeHandler} >
                            <option value="Miền Bắc">Miền Bắc</option>
                            <option value="Miền Trung">Miền Trung</option>
                            <option value="Miền Nam">Miền Nam</option>
                        </select>
                    </div>
                    <div className='add-difficulty flex-col'>
                        <p>Độ khó</p>
                        <select name='difficulty' onChange={onChangeHandler} >
                            <option value="Khó">Khó</option>
                            <option value="Trung bình">Trung bình</option>
                            <option value="Dễ">Dễ</option>
                        </select>
                    </div>
                </div>
                <button type='submit' className='add-btn' >Thêm món</button>
            </form>
        </div>
    )
}

export default Add
