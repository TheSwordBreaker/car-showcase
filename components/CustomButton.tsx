"use client";

import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/utils/types";

const CustomButton = ({
	isDisabled,
	btnType,
	containerStyles,
	textStyles,
	title,
	rightIcon,
	handleClick,
}: CustomButtonProps) => {
	return (
		<button
			disabled={isDisabled}
			type={btnType || "button"}
			className={`custom-btn ${containerStyles}`}
			onClick={handleClick}
		>
			<span className={`flex-1 ${textStyles}`}>{title}</span>

			{rightIcon && (
				<div className="h-6 w-6 relative">
					<Image
						src={rightIcon}
						alt="arrow_left"
						fill
						className="object-contain"
					/>
				</div>
			)}
		</button>
	);
};

export default CustomButton;
