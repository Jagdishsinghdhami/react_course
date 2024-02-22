import { useState } from "react";
import * as Yup from "yup";

const FormWithYup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    interests: [],
    birthDate: "",
  });

  console.log(formData);
  const [errors, setErrors] = useState("");

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is Required."),
    lastName: Yup.string().required("Last Name is Required."),
    email: Yup.string()
      .required("Email is Required.")
      .email("Invalid email format"),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits.")
      .required(),
    password: Yup.string()
      .required("Password is required...")
      .min(8, "password must be 8 digits")
      .matches(/[0-9]/, "password must contain at least one number"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "passwords must be match")
      .required("confirm password is required"),
    age: Yup.number().typeError("Age must be a number"),
    gender: Yup.string().required("Gender is required"),
    interests: Yup.array()
      .min(1, "Select at least on interest ")
      .required("Select at least one interest"),
    birthDate: Yup.date().required("Date of birth is required"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      console.log("form submitted ", formData);
    } catch (error) {
      console.log("error", error);
      const newError = {};

      error.inner.forEach((err) => {
        newError[err.path] = err.message;
      });
      setErrors(newError);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const updateInterests = [...formData.interests];
    if (checked) {
      updateInterests.push(name);
    } else {
      updateInterests = updateInterests.filter((interest) => interest !== name);
    }

    setFormData({
      ...formData,
      interests: updateInterests,
    });
  };
  return (
    <>
      <h2>form without Yup</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label>First Name :</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <div className="error">{errors.firstName}</div>}
        </div>
        <div>
          <label>Last Name :</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <div className="error">{errors.lastName}</div>}
        </div>
        <div>
          <label>Email :</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div>
          <label>Mobile Number :</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Enter your Mobile Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && (
            <div className="error">{errors.phoneNumber}</div>
          )}
        </div>
        <div>
          <label>password :</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <div>
          <label> confirm password :</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Enter your Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <div className="error">{errors.confirmPassword}</div>
          )}
        </div>

        <div>
          <label> age</label>
          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <div className="error">{errors.age}</div>}
        </div>

        <div>
          <label>Gender :</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <div className="error">{errors.gender}</div>}
        </div>

        <div>
          <label>Interests:</label>
          <label>
            <input
              type="checkbox"
              name="coding"
              checked={formData.interests.includes("coding")}
              onChange={handleCheckboxChange}
            />
            coding
          </label>

          <label>
            <input
              type="checkbox"
              name="sports"
              checked={formData.interests.includes("sports")}
              onChange={handleCheckboxChange}
            />
            Sports
          </label>

          <label>
            <input
              type="checkbox"
              name="reading"
              checked={formData.interests.includes("reading")}
              onChange={handleCheckboxChange}
            />
            Reading
          </label>
          {errors.interests && (
            <div className="error">{errors.updateInterests}</div>
          )}
        </div>

        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            placeholder="Enter Your Birth Date"
            onChange={handleChange}
          />
          {errors.birthDate && <div className="error">{errors.birthDate}</div>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormWithYup;
