import { useState } from "react";

const useInputFeild = (defaultValue) => {
   const [fieldValue, setFeildValue] = useState(defaultValue);

   const handleFieldOnchange = e => {
    setFeildValue(e.target.value)
   }

   return [fieldValue, handleFieldOnchange]
} 

export default useInputFeild;