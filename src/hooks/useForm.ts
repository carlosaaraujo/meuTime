import { useState } from "react";

interface FormState {
  apiKey: string;
  remember?: boolean;
}

export const useForm = (initialState: FormState) => {
  const [form, setForm] = useState<FormState>(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const clearInput = () => {
    setForm(initialState);
  };

  return [form, handleInputChange, clearInput] as const;
};
