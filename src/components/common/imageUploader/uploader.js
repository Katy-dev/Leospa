import React, { useRef, useState } from 'react';
import ReactCrop from "react-image-crop";
import "react-image-crop/lib/ReactCrop.scss";
import styles from "./uploader.module.scss";
import store from "../../../store/store";
import { setUserPhoto } from "../../../store/redusers/feedbackReducer";
import { useSelector } from 'react-redux';

const ImageUploader = () => {
    const [image, setImage] = useState(null);
    const [crop, setCrop] = useState({crop: {
            unit: "300px",
            width: 200,
            height: 200
        }});
    const { photo } = useSelector(setUserPhoto);
    const [cropImage, setCropImage] = useState(null);
    const avatar = cropImage ? cropImage : "/assets/image/icon/avatar.png";
    const [src, setSrc] = useState(null);
    const [isOpen, setOpen] = useState(false);
    const inputFile = useRef(null);

    const onButtonClick = () => {
        inputFile.current.click();
    };

    const handleFileChange = (e) => {
        setSrc(URL.createObjectURL(e.target.files[0]));
    };

    const handleOpenModal = () => {
        setOpen(() => !isOpen);
    };

    const handleCloseModal = () => {
        setOpen(() => !isOpen);
    };

    const getCroppedImg = () => {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height,
        );
        const base64Image = canvas.toDataURL('image/jpeg');
        setCropImage(base64Image);
        /*store.dispatch(
            setUserPhoto({
                photo: base64Image,
            })
        );*/
        //localStorage.setItem('photo', base64Image);
        setOpen(() => !isOpen);
    }

    const imageCrop = src && (
        <div className={styles.popUpCropper}>
            <ReactCrop
                style={{ height: '100%', width: '100%' }}
                className={styles.cropper}
                src={src}
                onImageLoaded={setImage}
                crop={crop}
                onChange={newCrop => setCrop(newCrop)}
            />
        </div>
    );

    const modalCropImage = isOpen &&  (
        <>
            <div className={styles.modal_wrapper}>
            <div className={styles.modal_content}>
                <h5
                    className={styles.modal_header}>
                    Please, choose your photo</h5>
                <div className={styles.modal_img}>
                    <img src="/assets/image/img/feedbackBanner.jpg" alt="flower"/>
                </div>
                <button
                    className={styles.modal_button}
                    onClick={onButtonClick}
                    onChange={handleFileChange}
                >Choose
                    <input className={styles.inputFile}
                           ref={inputFile}
                           accept="image/*"
                           type="file"
                    />
                </button>
                <div className={styles.wrapper_crop}>
                    { imageCrop }
                </div>
                <button
                    className={styles.popUp_button}
                    onClick={getCroppedImg}
                >
                    Crop image
                </button>
                    <button
                        className={styles.modal_cancel_button}
                        onClick={handleCloseModal}>
                        <img src="/assets/image/icon/cancel-modal.svg" alt="cancel"/>
                    </button>
            </div>
            </div>
        </>
    );

    return (
        <>
            <div
                onClick={handleOpenModal}
                className={styles.feedback__avatar}>
                <img className={styles.feedback__img}
                     src={avatar}
                     alt="avatar"/>
            </div>
                { modalCropImage }
        </>
    )
}

export default ImageUploader;