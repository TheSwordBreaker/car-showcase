"use client";

import { useState } from "react";
import Image from "next/image";

import { CarProps } from "@/utils/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils/helper";
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";

interface CarCardProps {
	car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
	const { city_mpg, year, make, model, transmission, drive } = car;

	const [isOpen, setIsOpen] = useState(false);

	const carRent = calculateCarRent(city_mpg, year);

	return (
		<div className="car-card group">
			<div className="car-card__content">
				<h2 className="car-card__content-title">
					{make} {model}
				</h2>
			</div>

			<p className="flex font-extrabold mt-6 text-[32px] leading-[38px]">
				<span className="font-semibold text-[14px] leading-[17px] self-start">
					$
				</span>
				{carRent}
				<span className="font-medium text-[14px] leading-[17px] self-end">
					/day
				</span>
			</p>

			<div className="object-contain h-40 my-3 w-full relative">
				<Image
					src={generateCarImageUrl(car)}
					alt="car model"
					fill
					priority
					className="object-contain"
				/>
			</div>

			<div className="flex mt-2 w-full relative">
				<div className="flex text-grey w-full justify-between group-hover:invisible">
					<div className="flex flex-col gap-2 justify-center items-center">
						<Image
							src="/steering-wheel.svg"
							width={20}
							height={20}
							alt="steering wheel"
						/>
						<p className="text-[14px] leading-[17px]">
							{transmission === "a" ? "Automatic" : "Manual"}
						</p>
					</div>
					<div className="car-card__icon">
						<Image src="/tire.svg" width={20} height={20} alt="seat" />
						<p className="car-card__icon-text">{drive.toUpperCase()}</p>
					</div>
					<div className="car-card__icon">
						<Image src="/gas.svg" width={20} height={20} alt="seat" />
						<p className="car-card__icon-text">{city_mpg} MPG</p>
					</div>
				</div>

				<div className="car-card__btn-container">
					<CustomButton
						title="View More"
						containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
						textStyles="text-white text-[14px] leading-[17px] font-bold"
						rightIcon="/right-arrow.svg"
						handleClick={() => setIsOpen(true)}
					/>
				</div>
			</div>

			<CarDetails
				isOpen={isOpen}
				closeModal={() => setIsOpen(false)}
				car={car}
			/>
		</div>
	);
};

export default CarCard;
