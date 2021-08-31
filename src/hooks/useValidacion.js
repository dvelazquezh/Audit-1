import React, { useEffect, useState } from 'react'

const useValidacion = (initialState, validar, fn) => {

  const [valores, setvalores] = useState(initialState);
  const [errores, seterrores] = useState({});
  const [submitForm, setsubmitForm] = useState(false);

  useEffect(() => {
    if (submitForm) {
      const noErrores = Object.keys(errores).length === 0;

      if (noErrores) {
        fn();
      }
      setsubmitForm(false)
    }
  }, [])

  const handleChange = (e) => {
    setvalores({
      ...valores,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresValidacion = validar(valores);
    seterrores(erroresValidacion);
    setsubmitForm(false)

  }

  return {
    valores,
    errores,
    submitForm,
    handleChange,
    handleSubmit
  }
}

export default useValidacion
