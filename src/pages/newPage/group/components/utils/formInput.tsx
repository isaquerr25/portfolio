import {
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
	Text,
} from '@chakra-ui/react';

import { FieldConfig, useField } from 'formik';
import { FC, ReactNode } from 'react';

import React from 'react';

type FormInputProps = {
	inputIcon?: ReactNode;
	justRead?: boolean;
	classInINput?: string;
	label?: string;
	classInfo?: string;
	placeholder?: string;
	type:
		| 'text'
		| 'password'
		| 'email'
		| 'numberShow'
		| 'number'
		| 'file'
		| 'phoneNumber'
		| 'percentage'
		| 'date';
	helperText?: string;
} & FieldConfig;

const FormInput = ({
	classInfo,
	classInINput,
	inputIcon,
	label,
	placeholder,
	type,
	helperText,
	justRead,
	...props
}: FormInputProps) => {
	const [field, meta] = useField(props as any);
	const inputId = `form-input-${field.name}`;
	const error = !!meta.error && meta.touched;

	return (
		<FormControl isInvalid={error} className={classInfo ?? ''}>
			{label && (
				<Text className="text-[2.5rem] md:text-[1.6rem] xl:text-[1rem] mb-[.5rem]">
					{label}
				</Text>
			)}
			<InputGroup>
				{inputIcon && (
					// eslint-disable-next-line react/no-children-prop
					<InputLeftElement pointerEvents="none" children={inputIcon} />
				)}
				{type !== 'percentage' &&
					type !== 'number' &&
					type !== 'file' &&
					type !== 'numberShow' &&
					type !== 'phoneNumber' && (
					<Input
						fontSize={{ base: '2rem', lg: '1rem' }}
						className={classInINput}
						id={inputId}
						{...field}
						placeholder={placeholder}
						type={type}
						border="1px"
						borderColor="gray.400"
						h={{ base: '4rem', lg: '2rem' }}
						fontWeight={100}
						disabled={justRead ?? false}
					/>
				)}
				{type === 'file' && (
					<>
						<FormLabel id={inputId}>Select a File:</FormLabel>

						<Input
							className={classInINput}
							accept="image/*"
							alignItems={'center'}
							id={inputId}
							{...field}
							placeholder={placeholder}
							type={type}
							border="1px"
							borderColor="gray.400"
							disabled={justRead ?? false}
							fontSize={{ base: '2rem', lg: '1rem' }}
							h={{ base: '4rem', lg: '2rem' }}
						/>
					</>
				)}
			</InputGroup>
			{!error && helperText && <FormHelperText>{helperText}</FormHelperText>}
			<FormErrorMessage>{meta.error}</FormErrorMessage>
		</FormControl>
	);
};

export default FormInput;
