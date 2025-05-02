"use client";

import { Alert, AlertTitle } from "@/components/ui/alert";
import { Eye, EyeOff, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { IconExclamationCircle } from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { login } from "@/app/(pages)/auth/login/actions";
import { useFormStatus } from "react-dom";
import { useState } from "react";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="w-full" type="submit" disabled={pending}>
      {pending ? (
        <div className="flex items-center justify-center gap-2">
          <Loader2 className="h-5 w-5 animate-spin" />
        </div>
      ) : (
        "Entrar"
      )}
    </Button>
  );
}

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function handleSubmit(formData: FormData) {
    setError(null);
    const result = await login(formData);
    if (result?.error) {
      setError(result.error);
    }
  }

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      {...props}
      action={handleSubmit}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Faça login na sua conta</h1>
        <p className="text-muted-foreground text-sms">
          Insira seu e-mail abaixo para entrar na sua conta
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="endereço@domínio.com"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Senha</Label>
            <a
              href="/auth/forgot-password"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Esqueceu sua senha?
            </a>
          </div>
          <div className="relative">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              value={formData.password}
              onChange={handleInputChange}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
        {error && (
          <Alert
            variant="destructive"
            className="bg-red-50 border-red-200 p-2 pl-3"
          >
            <IconExclamationCircle className="h-6 w-6" />
            <AlertTitle>{error}</AlertTitle>
          </Alert>
        )}

        <SubmitButton />
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Sistema
          </span>
        </div>
      </div>
      <div className="text-center text-sm">
        Problema em acessar sua conta?
        <a
          href="https://wa.me/5519983914162"
          className="px-1 underline underline-offset-4"
        >
          Entre em contato
        </a>
      </div>
    </form>
  );
}
