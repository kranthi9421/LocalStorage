import React, { useCallback, useEffect,  useState } from "react";
import { useForm } from "react-hook-form";
import { useLocalStorage } from "./useLocalStorage";

const initValues = {
  name: "Kranthi",
  email : 'Kranthi.007007@gmail.com',
  password : '12345'
};

export  const LocalHookForm = ()=>{
  const [loaded, setLoaded] = useState(false);
  const [storage, setStorage] = useLocalStorage("formValues",initValues);
  const { register, handleSubmit, reset, watch } = useForm();
  const onSubmit = useCallback(() => alert("submited"), []);
  const formData = watch();


  useEffect(() => {
    if (!loaded) {
      reset(storage);
      setLoaded(true);
    }
  }, [storage, reset, loaded]);

  const onChange = () => {
    setStorage(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} onChange={onChange}>
      <input name="name"  {...register('name')} />
      <input name="email"  {...register('email')} />
      <input name="password"  {...register('password')} />
      <button type="submit">Submit</button> 
    </form>
  );
}