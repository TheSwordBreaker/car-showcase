"use client";

import { updateSearchParams } from "@/utils/helper";
import { ShowMoreProps } from "@/utils/types";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
	const router = useRouter();

	const handleNavigation = () => {
		// Calculate the new limit based on the page number and navigation type
		const newLimit = (pageNumber + 1) * 10;

		// Update the "limit" search parameter in the URL with the new value
		const newPathname = updateSearchParams("limit", `${newLimit}`);

		router.push(newPathname);
	};

	return (
		<div className="flex-center mt-10 w-full gap-5">
			{!isNext && (
				<CustomButton
					btnType="button"
					title="Show More"
					containerStyles="bg-primary-blue rounded-full text-white"
					handleClick={handleNavigation}
				/>
			)}
		</div>
	);
};

export default ShowMore;
