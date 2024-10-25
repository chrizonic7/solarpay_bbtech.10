"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

interface LoginFormProps {
  role: "admin" | "agent" | "customer"
}

export function LoginForm({ role }: LoginFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    // Demo credentials for testing
    const demoCredentials = {
      admin: { email: "admin@solarpay.com", password: "admin123" },
      agent: { email: "agent@solarpay.com", password: "agent123" },
      customer: { email: "customer@solarpay.com", password: "customer123" },
    }

    if (
      values.email === demoCredentials[role].email &&
      values.password === demoCredentials[role].password
    ) {
      toast.success("Logged in successfully")
      router.push(role === "admin" ? "/" : `/${role}`)
    } else {
      toast.error("Invalid credentials")
    }
    
    setIsLoading(false)
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder={`${role}@solarpay.com`}
          {...form.register("email")}
        />
        {form.formState.errors.email && (
          <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="••••••"
          {...form.register("password")}
        />
        {form.formState.errors.password && (
          <p className="text-sm text-red-500">{form.formState.errors.password.message}</p>
        )}
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Signing in..." : "Sign in"}
      </Button>
      <div className="text-sm text-center text-muted-foreground">
        Demo credentials: {role}@solarpay.com / {role}123
      </div>
    </form>
  )
}