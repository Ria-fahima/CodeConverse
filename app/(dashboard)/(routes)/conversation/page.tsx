"use client"

import { Heading } from "@/components/heading";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ConversationPage = () =>{

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            prompt: ""
        }
    })

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async(values: z.infer<typeof formSchema>) =>{
        console.log(values);
    }

    return(
        <div>
            <Heading title="Conversation" 
                description="Our most sophisticated conversation system"
                icon = {MessageSquare}
                bgColor = "bg-violet-500/10"
                iconColor="text-violet-500"/>
            <div className="px-4 lg:px-8">
                <div>
                    <Form{...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}
                                className="rounded-lg border w-full p-4 px-3 md:px-6 
                                            focus-within:shadow-sm grid grid-cols-12 gap-2">
                            <FormField name="prompt" 
                                        render ={({field}) => (
                                            <FormItem className="col-span-12 lg:col-span-10">
                                                <FormControl className="m-0 p-0">
                                                    <Input className="border-0 outline-none
                                                                focus-visible:ring-0
                                                                focus-visible:ring-transparent"
                                                            disabled={isLoading}
                                                            placeholder="Can you explain the theory of relativity in simple terms?"
                                                            {...field}/>
                                                </FormControl>
                                            </FormItem>
                            )}/>
                            <Button className="col-span-12 lg:col-span-2 w-full">
                                Click Here
                            </Button>

                        </form>
                    </Form>
                </div>
                <div className="space-y-4 mt-4">
                    Answer content
                </div>
            </div>
        </div>
    )
};

export default ConversationPage;