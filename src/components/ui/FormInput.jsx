export const FormInput = ({type, name, placeholder, error=false, onChange}) => {
  return (
    <>
      <label htmlFor={name} className="font-semibold">{name}</label>
      <input 
        type={type} 
        name={name} 
        id={name} 
        placeholder={placeholder} 
        onChange={onChange}
        className={`w-full h-12 bg-white shadow-md border-none border-b-slate-400 rounded outline-none py-0 px-4 focus:border-solid focus:border-2 focus:border-blue-400 ${error && "text-red-600 border-2 border-solid border-red-600 focus:border-solid focus:border-2 focus:border-red-600"}`}/>
    </>
  )
}