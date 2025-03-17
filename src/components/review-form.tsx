import type { UseFormReturn } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ReviewFormProps {
  form: UseFormReturn<any>;
}

export function ReviewForm({ form }: ReviewFormProps) {
  const { getValues } = form;
  const values = getValues();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Revise suas Informações</h2>
      <p className="text-muted-foreground">
        Por favor, revise suas informações antes de enviar.
      </p>

      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Informações Pessoais</h3>
              <Separator className="my-2" />
              <dl className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Nome
                  </dt>
                  <dd>{values.firstName}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Sobrenome
                  </dt>
                  <dd>{values.lastName}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Email
                  </dt>
                  <dd>{values.email}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Telefone
                  </dt>
                  <dd>{values.phone}</dd>
                </div>
              </dl>
            </div>

            <div>
              <h3 className="font-medium">Endereço</h3>
              <Separator className="my-2" />
              <dl className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <dt className="text-sm font-medium text-muted-foreground">
                    Endereço
                  </dt>
                  <dd>{values.address}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Cidade
                  </dt>
                  <dd>{values.city}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Estado
                  </dt>
                  <dd>{values.state}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Código Postal
                  </dt>
                  <dd>{values.zipCode}</dd>
                </div>
              </dl>
            </div>

            <div>
              <h3 className="font-medium">Conta</h3>
              <Separator className="my-2" />
              <dl className="grid grid-cols-1 gap-2">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Nome de Usuário
                  </dt>
                  <dd>{values.username}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Senha
                  </dt>
                  <dd>********</dd>
                </div>
              </dl>
            </div>

            <div>
              <h3 className="font-medium">Informações do Evento</h3>
              <Separator className="my-2" />
              <dl className="grid grid-cols-1 gap-2">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Nome do Evento
                  </dt>
                  <dd>{values.eventName}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Tipo de Evento
                  </dt>
                  <dd>{values.eventType}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Endereço do Evento
                  </dt>
                  <dd>{values.eventLocation}</dd>
                </div>
              </dl>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
