import {ErrorMessagesType} from "@/types/errorMessages.type";
import {Button} from "@/components/ui/button";
import ErrorMessage from "@/app/register/components/errorMessage";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";

const Form = ({formHandler, errorMessages}: {formHandler: any, errorMessages: ErrorMessagesType|undefined}) => {
  const inputClass = "w-full sm:w-[320px] lg:w-[400px] py-2 lg:py-3 pl-4 bg-transparent outline-1 outline outline-primary focus-visible:outline-blue rounded-lg text-sm"
  const errInputClass = inputClass.replace('outline-primary', 'outline-red-700')


  return (
      <div>
        <form action={formHandler}
              className={"flex flex-col gap-6 text-primary"}>
          <div className={"flex flex-col gap-1.5"}>
            <Label className={"text-sm" + !errorMessages?.password ? "" : " text-red-700"}
                   htmlFor="Email">Email</Label>
            <Input
                className={!errorMessages?.password ? inputClass : errInputClass}
                type={"email"}
                name={"email"}
                required
                placeholder={"Email Anda di sini"}
            />
            {errorMessages?.email ? errorMessages.email?.map((prop, id) => (
                <ErrorMessage key={id} message={prop}/>
            )) : null}
          </div>
          <div>
            <Button
                type={"submit"}
                size={"lg"}
                className={"w-full bg-blue rounded-lg mt-2 font-bold"}>
              Kirim
            </Button>
          </div>
        </form>
      </div>
  )
}

export default Form