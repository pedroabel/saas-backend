import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login, signup } from "@/app/(pages)/auth/login/actions";
import { login, signup } from "@/app/(pages)/auth/login/actions";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Faça login na sua conta</h1>
        <p className="text-muted-foreground text-sms">
          Insira seu e-mail abaixo para fazer login em sua conta
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            name="email"
            type="email"
            placeholder="endereço@domínio.com"
            required
          />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Senha</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Esqueceu sua senha?
            </a>
          </div>
          <Input id="password" name="password" type="password" required />
          <Input id="password" name="password" type="password" required />
        </div>
        <Button className="w-full" formAction={login}>
          Entrar
        </Button>
        <Button className="w-full" formAction={signup}>
          Cadastrar
        </Button>
        <Button className="w-full" formAction={signup}>
          Sign up
        </Button>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Sistema
          </span>
        </div>
      </div>
      <div className="text-center text-sm">
        Não possui uma conta?
        <a href="#" className="underline underline-offset-4">
          Entre em contato
        </a>
      </div>
    </form>
  );
}
