import { DaysForCompleteField } from "../DaysForCompleteField";
import { DeadlineField } from "../DeadlineField";
import { DependenciesForm } from "../DependenciesForm";
import { DescriptionField } from "../DescriptionField";
import { NameField } from "../NameField";
import { ResponsibleSelect } from "../ResponsibleSelect";

export const Form = () => {
  return (
    <div>
      <NameField />
      <DescriptionField />
      <ResponsibleSelect />
      <DeadlineField />
      <DaysForCompleteField />
      <DependenciesForm />
    </div>
  );
};
