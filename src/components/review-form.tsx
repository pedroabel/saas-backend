import type { UseFormReturn } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { CreateFormData } from "@/types/form";

interface ReviewFormProps {
  form: UseFormReturn<CreateFormData>;
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
                  <dd>{values.fullName}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Rg
                  </dt>
                  <dd>{values.rg}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Cpf
                  </dt>
                  <dd>{values.cpf}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Cnh
                  </dt>
                  <dd>{values.cnh}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Cnh Categoria
                  </dt>
                  <dd>{values.cnhCategory}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Data de Validade CNH
                  </dt>
                  <dd>{values.cnhExpirationDate}</dd>
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
              <h3 className="font-medium">Veiculo</h3>
              <Separator className="my-2" />
              <dl className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <dt className="text-sm font-medium text-muted-foreground">
                    Modelo
                  </dt>
                  <dd>{values.brand}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Model
                  </dt>
                  <dd>{values.model}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Placa
                  </dt>
                  <dd>{values.licensePlate}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Cor
                  </dt>
                  <dd>{values.color}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Chassi
                  </dt>
                  <dd>{values.chassiss}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Ano/Modelo
                  </dt>
                  <dd>{values.yearModel}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Valor Fipe
                  </dt>
                  <dd>{values.fipeValue}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Combustivel
                  </dt>
                  <dd>{values.fuelType}</dd>
                </div>
              </dl>
            </div>
            <div>
              <h3 className="font-medium">Informações do Evento</h3>
              <Separator className="my-2" />
              <dl className="grid grid-cols-1 gap-2">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Tipo
                  </dt>
                  <dd>{values.type}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Local
                  </dt>
                  <dd>{values.location}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Boletim de Ocorrencia
                  </dt>
                  <dd>{values.policeReportNumber}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Possui terceiro
                  </dt>
                  <dd>{values.hasThirdParty}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Email Terceiro
                  </dt>
                  <dd>{values.thirdPartyEmail}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Telefone terceiro
                  </dt>
                  <dd>{values.thirdPartyPhone}</dd>
                </div>
              </dl>
            </div>
            <div>
              <h3 className="font-medium">Relatos</h3>
              <Separator className="my-2" />
              <dl className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <dt className="text-sm font-medium text-muted-foreground">
                    Descrição
                  </dt>
                  <dd>{values.description}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Danos Aparentes
                  </dt>
                  <dd>{values.apparentDamage}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Fotos do Veiculo
                  </dt>
                  <dd>{values.vehiclePhotos}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Video do Veiculo
                  </dt>
                  <dd>{values.vehicleVideo}</dd>
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
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
