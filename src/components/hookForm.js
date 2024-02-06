import React from "react";
import { useForm } from "react-hook-form";

const HookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const formSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(formSubmit)}>
        <input
          {...register("lastName", {
            required: "поле оьязательно пополнить",
            minLength: {
              value: 2,
              message: "minLength 2",
            },
          })}
          type="text"
          placeholder="Last name"
        />
        {errors.lastName && <span>{errors.lastName.message}</span>}
        <input
          {...register("firstName", {
            required: "поле оьязательно пополнить",
            minLength: {
              value: 2,
              message: "minLength 2",
            },
          })}
          type="text"
          placeholder="Last name"
        />
        {errors.firstName && <span>{errors.firstName.message}</span>}
        <input
          {...register("email", {
            required: "поле оьязательно пополнить",
            minLength: {
              value: 5,
              message: "minLength 2",
            },
          })}
          type="text"
          placeholder="email"
        />{
         errors.email && <span>{errors.email.message}</span>
        }
        <button>add</button>
      </form>
    </div>
  );
};

export default HookForm;
