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
      <h2 className="text-xl font-semibold">Review Your Information</h2>
      <p className="text-muted-foreground">
        Please review your information before submitting.
      </p>

      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Personal Information</h3>
              <Separator className="my-2" />
              <dl className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    First Name
                  </dt>
                  <dd>{values.firstName}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Last Name
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
                    Phone
                  </dt>
                  <dd>{values.phone}</dd>
                </div>
              </dl>
            </div>

            <div>
              <h3 className="font-medium">Address</h3>
              <Separator className="my-2" />
              <dl className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <dt className="text-sm font-medium text-muted-foreground">
                    Street Address
                  </dt>
                  <dd>{values.address}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    City
                  </dt>
                  <dd>{values.city}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    State
                  </dt>
                  <dd>{values.state}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Zip Code
                  </dt>
                  <dd>{values.zipCode}</dd>
                </div>
              </dl>
            </div>

            <div>
              <h3 className="font-medium">Account</h3>
              <Separator className="my-2" />
              <dl className="grid grid-cols-1 gap-2">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Username
                  </dt>
                  <dd>{values.username}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Password
                  </dt>
                  <dd>********</dd>
                </div>
              </dl>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
