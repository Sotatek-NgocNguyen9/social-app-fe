import { useFormik } from 'formik';
import { useContext, useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import IPost from '../common/interfaces/post.interface';
import PostContext from '../contexts/post-context';
import UserContext from '../contexts/user-context';
import PostService from '../services/post.service';

const useNewPostModal = () => {
  const userContext = useContext(UserContext);
  const postContext = useContext(PostContext);

  const [image, setImage] = useState(null);
  const [imageDataURL, setImageDataURL] = useState(undefined);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        setImageDataURL(e.target.result);
      };
      reader.readAsDataURL(image);
    }
  }, [image]);

  const inputPictureRef = useRef<HTMLInputElement>(null);

  const handleShowPictureUpload = () => {
    inputPictureRef?.current?.click();
  };
  const handleUploadPicture = (e: any) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const postFormik = useFormik({
    enableReinitialize: true,
    initialValues: { content: '' },
    validationSchema: Yup.object({
      content: Yup.string()
        .max(100, "Your post content shouldn't exceed 200 characters")
        .required('Post content is required')
    }),
    onSubmit: (values, { resetForm }) => {
      let payload: IPost = {
        secure: '',
        content: ''
      };
      image
        ? (payload = {
            secure: 'public',
            content: values.content,
            media: image
          })
        : (payload = {
            secure: 'public',
            content: values.content
          });
      PostService.createPost(payload).then(() => {
        resetForm();
        setImage(null);
        setImageDataURL(undefined);
        setTimeout(() => {
          postContext.getFeed();
        }, 200);
      });
    }
  });

  return {
    postFormik,
    userContext,
    imageDataURL,
    inputPictureRef,
    handleShowPictureUpload,
    handleUploadPicture
  };
};

export default useNewPostModal;
