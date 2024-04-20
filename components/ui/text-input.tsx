import React from 'react';

interface TextInputProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
    label,
    value,
    onChange,
    placeholder,
    required = false,
}) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
        </div>
    );
};
