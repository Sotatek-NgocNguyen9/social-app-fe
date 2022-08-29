import { useFormik } from "formik";
import { useContext, useState } from "react";
import UserContext from "../contexts/user-context";
import * as Yup from "yup";
import UserContextSetters from "../contexts/user-context-setters";

const useBioModal = () => {
  const userContext = useContext(UserContext);
  const userContextSetters = useContext(UserContextSetters);

  const [editName, setEditName] = useState(false);
  const nameFormik = useFormik({
    enableReinitialize: true,
    initialValues: { name: userContext.name },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(100, "Your name shouldn't exceed 100 characters")
        .required("Name is required"),
    }),
    onSubmit: (values) => {
      userContextSetters.updateName(values.name);
      setEditName(false);
    },
  });

  const [editLocation, setEditLocation] = useState(false);
  const locationFormik = useFormik({
    enableReinitialize: true,
    initialValues: { location: userContext.location },
    validationSchema: Yup.object({
      location: Yup.string()
        .max(100, "Your location shouldn't exceed 100 characters")
        .required("Location is required"),
    }),
    onSubmit: (values) => {
      userContextSetters.updateLocation(values.location);
      setEditLocation(false);
    },
  });

  const [editBio, setEditBio] = useState(false);
  const bioFormik = useFormik({
    enableReinitialize: true,
    initialValues: { bio: userContext.bio },
    validationSchema: Yup.object({
      bio: Yup.string()
        .max(100, "Your bio shouldn't exceed 100 characters")
        .required("Location is required"),
    }),
    onSubmit: (values) => {
      userContextSetters.updateBio(values.bio);
      setEditBio(false);
    },
  });

  const [editFacebook, setEditFacebook] = useState(false);
  const facebookFormik = useFormik({
    enableReinitialize: true,
    initialValues: { facebook: userContext.facebook },
    validationSchema: Yup.object({
      facebook: Yup.string()
        .max(100, "Your facebook account shouldn't exceed 100 characters")
        .required("Location is required"),
    }),
    onSubmit: (values) => {
      userContextSetters.updateFacebook(values.facebook);
      setEditFacebook(false);
    },
  });

  const [editInstagram, setEditInstagram] = useState(false);
  const instagramFormik = useFormik({
    enableReinitialize: true,
    initialValues: { instagram: userContext.instagram },
    validationSchema: Yup.object({
      instagram: Yup.string()
        .max(100, "Your Instagram account shouldn't exceed 100 characters")
        .required("Location is required"),
    }),
    onSubmit: (values) => {
      userContextSetters.updateInstagram(values.instagram);
      setEditInstagram(false);
    },
  });

  const [editLinkedin, setEditLinkedin] = useState(false);
  const linkedinFormik = useFormik({
    enableReinitialize: true,
    initialValues: { linkedin: userContext.linkedin },
    validationSchema: Yup.object({
      linkedin: Yup.string()
        .max(100, "Your Linkedin account shouldn't exceed 100 characters")
        .required("Location is required"),
    }),
    onSubmit: (values) => {
      userContextSetters.updateLinkedin(values.linkedin);
      setEditLinkedin(false);
    },
  });

  return {
    nameFormik,
    locationFormik,
    bioFormik,
    facebookFormik,
    instagramFormik,
    linkedinFormik,
    editName,
    editLocation,
    editBio,
    editFacebook,
    editInstagram,
    editLinkedin,
    setEditName,
    setEditLocation,
    setEditBio,
    setEditFacebook,
    setEditInstagram,
    setEditLinkedin,
  };
};

export default useBioModal;
