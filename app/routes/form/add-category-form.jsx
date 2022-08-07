import { Form } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import {ButtonPrimary, Input} from "~/components/shared";
import {createCategory} from "~/api";

export default function AddCategoryForm() {
  return (
    <Form 
        method="POST" 
        action="/form/add-category-form" 
        className="flex flex-col"
    >
        <Input name="title" placeholder="Titulo" className="my-2"/>
        <Input name="slug" placeholder="Slug" />

        <ButtonPrimary type="submit" className="mt-3">
            Crear Categoria
        </ButtonPrimary>
    </Form>
  )
}

export async function action(props){
    const {request} = props;
    const formData = await request.formData();
    const data = {
        title: formData.get("title"),
        slug: formData.get("slug")
    }
    await createCategory(data);
    return redirect("/");
}