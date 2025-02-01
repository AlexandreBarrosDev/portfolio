import { InputInterface } from "@/interfaces"

export default function Input(props: InputInterface) {
  return (
    <>
      <label htmlFor={props.htmlFor}>{props.label}</label>
        <input
          className="w-full"
          type={props.type}
          id={props.id}
          name={props.name}
          placeholder={props.placeholder}
      />
    </>
  )
}
